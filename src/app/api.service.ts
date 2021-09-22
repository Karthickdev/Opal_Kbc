import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastController, LoadingController } from '@ionic/angular';

@Injectable({
	providedIn: 'root'
})
export class ApiService {
	//baseUrl: string = 'http://67.79.237.242/opal/uat/KBC/';
	baseUrl :string = 'https://www2.order-fulfillment.bz/kbc/';
	//Login
	userLogin: string = 'userApi/userLogin';
	modalList: string = "itemsapi/GetAllItemListApi";
	//Return Item
	conditionDrop: string = "itemsapi/getreturnitemconditonenumList";
	reasonDrop: string = "itemsapi/getreturnitemreasonenumList"
	modelSearch: string = "itemsapi/getautoitemlist";
	saveReturnItem: string = "itemsapi/savereturnitemdetail";
	serialScan: string = "itemsapi/getreturnitemdetail";
	// serialVerify: string = "itemsapi/serialNumberValidation";//No need to validate 
	//Receive Item
	saveReceive: string = "itemsapi/savereceiveitemdetail";
	receiveSerialScan: string = "itemsapi/ReceiveItemSerialNumberVerification"
	//Scan order
	orderScan: string = "ordersapi/getscanorderdetail";
	saveOrder: string = "ordersapi/SaveScanOrderDetail";
	verifySerial: string = "ordersapi/VerifySerialNumber";
	//Add sale
	scanSerial: string = "itemsapi/AddSaleItemSerialNumberVerification";
	saleSave: string = "itemsapi/SaveAddSaleItem";
	//View Inventory
	viewInventory: string = "itemsapi/viewinventory"

	ajaxData: any;
	err: any;
	isLoading: any;
	userId: any = localStorage.getItem("Id");
	allModelLists: any = [];
	constructor(public http: HttpClient,
		public toastController: ToastController,
		public loadingCtrl: LoadingController) { }

	async presentToast(msg, color) {
		const toast = await this.toastController.create({
			message: msg,
			color: color,
			duration: 3000,
			position: 'bottom',
			keyboardClose: false,
			showCloseButton: true,
			cssClass: "toast",
		});
		toast.present();
	}

	async present() {
		this.isLoading = true;
		return await this.loadingCtrl.create({
			duration: 5000,
			message: 'Please wait...',
			spinner: 'lines',
		}).then(a => {
			a.present().then(() => {
				if (!this.isLoading) {
					a.dismiss();
				}
			});
		});
	}

	async dismiss() {
		this.isLoading = false;
		return await this.loadingCtrl.dismiss();
	}

	/**
* Default Ajax call for whole Application
* @param dataUrl 
* @param dataType 
* @param dataParam 
*/
	ajaxCallService(dataUrl, dataType, dataParam) {
		let headers = new HttpHeaders();
		headers.append('Access-Control-Allow-Methods', 'POST, GET ,OPTIONS');
		headers.append('Access-Control-Allow-Headers', 'application/json');
		headers.append('Content-Type', 'application/json');
		switch (dataType) {
			case 'get': return new Promise(resolve => {  //get return type	
				this.http.get(dataUrl)
					.subscribe(data => {
						this.ajaxData = data;
						resolve(this.ajaxData);
					}, (err) => {
						this.err = err.error;
						this.presentToast('Unable to reach server, Please try again', 'danger');
						resolve(this.err);

					});
			});
			case 'post': return new Promise(resolve => {	//post return type
				// this.presentLoading();

				this.http.post(dataUrl, dataParam, { headers: headers })
					.subscribe(data => {
						this.ajaxData = data;
						resolve(this.ajaxData);
					}, (err) => {
						if (err) {
							this.presentToast('Unable to reach server, Please try again', 'danger');
							resolve(this.err);
						} else {
							this.presentToast('Unable to reach server, Please try again', 'danger');
						}
					});
			});
		}
	}


	getAllModelList() {
		let url = this.baseUrl + this.modalList;
		this.allModelLists = [];
		this.ajaxCallService(url, "post", "").then(result => {
			let res: any = result;
			for (let i in res) {
				if (res[i]['modelNumber'] != undefined) {
					this.allModelLists.push(res[i]['modelNumber']);
				}
			}
		})
	}
}
