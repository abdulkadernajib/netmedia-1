import { Component } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { VoucherService } from 'src/app/services/voucher.service';

@Component({
  selector: 'app-purchase-voucher',
  templateUrl: './purchase-voucher.component.html',
  styleUrls: ['./purchase-voucher.component.scss']
})
export class PurchaseVoucherComponent {
  pageTitle = 'Invoice'
  invoiceDetails !: FormArray<any>;
  masterCustomer: any;
  masterBrand: any
  masterProduct: any;

  constructor(
    private builder: FormBuilder,
    private voucherService: VoucherService,
    private productService: ProductService,
    private router: Router) {

  }

  ngOnInit() {
    this.getCreditors();
    this.getBrands();
  }
  getCreditors() {
    this.voucherService.getCreditor().subscribe(res => {
      this.masterCustomer = res
    })
  }

  getBrands() {
    this.productService.getBrands().subscribe(res => {
      this.masterBrand = res
    })
  }

  PurchaseInvoiceForm = this.builder.group({
    invoiceNo: this.builder.control('', Validators.required),
    voucherNo: this.builder.control('', Validators.required),
    date: this.builder.control('', Validators.required),
    creditorName: this.builder.control('', Validators.required),
    address: this.builder.control(''),
    phone: this.builder.control(''),
    phone2: this.builder.control(''),
    total: this.builder.control({ value: 0, disabled: true }),
    gst: this.builder.control({ value: 0, disabled: true }),
    netTotal: this.builder.control({ value: 0, disabled: true }),
    details: this.builder.array([]),
  })

  productForm = this.builder.group({
    invoiceNo: this.builder.control(''),
    brandName: this.builder.control('', Validators.required),
    productName: this.builder.control('', Validators.required),
    imei: this.builder.control(''),
    qty: this.builder.control(1),
    price: this.builder.control(0),
    total: this.builder.control({ value: 0, disabled: true }),
  });

  productChange() {
    const brand = this.productForm.get("brandName")
    console.log(brand.value)
    this.productService.getMobileByBrand(brand.value).subscribe(res => {
      const product: any = res;
      if (product != null) {
        this.masterProduct = product
      }
    })
  }

  savePurchase() {
    console.log(this.PurchaseInvoiceForm.value)
  }

  get invProducts() {
    return this.PurchaseInvoiceForm.get("details") as FormArray;
  }

  addProduct() {
    this.invoiceDetails = this.PurchaseInvoiceForm.get("details") as FormArray;
    this.invoiceDetails.push(this.generateRow());
  }

  generateRow() {
    return this.productForm
  }

}
