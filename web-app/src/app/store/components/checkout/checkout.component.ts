import { Component, OnInit, Renderer2 } from '@angular/core';

interface Option {
  option: string;
  active: boolean;
}

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {

  options: Option[] = [
    { option: 'Customer', active: false },
    { option: 'Delivery', active: false },
    { option: 'Payment', active: false }
  ]

  selectedOption: Option;

  constructor(
    private render: Renderer2
  ) { }

  ngOnInit() {
    this.toggleOptions(this.options[0].option);

  }

  toggleOptions(value) {
    this.options.forEach((option) => {
      console.log(value == option.option)
      if (value == option.option) {
        this.selectedOption = option;
        this.setOptionActive(option);
      }
    });
    let x = setTimeout(() => {
      if (this.selectedOption.option == 'Payment') {
        let script = this.render.createElement('script');
        let payment = <HTMLElement>document.getElementById('payment');
        console.log(payment)
        script.text = `
          var sdk = new window.YocoSDK({
            publicKey: 'pk_test_0ca6823cEGgRBVG1fb14'
          });

          // Create a new dropin form instance
          var inline = sdk.inline({
            layout: 'field',
            amountInCents: 2499,
            currency: 'ZAR'
          });
          // this ID matches the id of the element we created earlier.
          inline.mount('#card-frame');
          `;
        this.render.appendChild(payment, script);
      }
    }, 500)

  }

  setOptionActive(active: Option) {
    this.options.forEach((option) => {
      option.active = false;
      if (option.option == active.option) {
        option.active = true;
      }
    });
  }

}
