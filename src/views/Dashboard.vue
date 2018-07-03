<template>
    <div class="animated fadeIn">
        <b-row>

    <b-col>
      <div class="brand-card">
          <div class="brand-card-header bg-facebook p-3">
          <div class="row justify-content-between">
            <h1 class="text-white"><i class="fa fa-tint m-2"></i>Eau</h1>
	    </div>
        </div>
                <div class=" container">
        <div class="card-body container">
            <div class="row vdivide p-6">
                <div class="col-sm-6 text-center">

                  <div>
                      <div class="text-value" style="font-size:40px;"><i class="fa fa-arrow-up mr-1"></i>3000L</div>
                      <div class="text-uppercase small">Consommation estimée</div>
                  </div>
    	       </div>
            <div class="col-sm-6 text-center text-danger">
                  <div>
                      <div class="text-value" style="font-size:40px;"><i class="fa fa-arrow-up mr-1"></i>36€</div>
                      <div class="text-uppercase small">Facture estimée</div>
                  </div>
             </div>
         </div>
       </div>
       <hr/>
          <div class="row justify-content-between text-danger">
            <div class="col-8"  style="font-size:20px;">
              <i class="fa fa-exclamation-triangle"></i> Vous consommez plus que la moyenne !
            </div>
            <div class="col-3 text-right">
	    	<h3 class="font-weight-bold">14%</h3>
            </div>
          </div>
          <div class="row justify-content-between  text-success"  style="font-size:20px;">
            <div class="col-8">
                Vous auriez pu economiser
            </div>
            <div class="col-2 text-right">
	    	<h3 class="font-weight-bold">10€</h3>
            </div>
          </div>
        </div>


	<div class="container">
       <hr/>
	  <div class="row">
	    <div class="col">
	    <div class="card bg-info">
		  <div class="card-body">
		    <h5 class="card-title">Robinet</h5>
		    <p class="card-text">Pensez à fermer le robinet quand vous vous voulez les dents</p>
		  </div>
		</div>
	    </div>
	    <div class="col">
	    <div class="card bg-info">
		  <div class="card-body">
		    <h5 class="card-title">Toilettes</h5>
		    <p class="card-text">Equipez vos toilettes d'une chasse d'eau à double commande</p>
		  </div>
		</div>
	    </div>
	    <div class="col">
	    <div class="card bg-info">
		  <div class="card-body">
		    <h5 class="card-title">Lave linge</h5>
		    <p class="card-text">Attendez que le lave linge soit rempli avant de faire une lessive. Utilisez le mode éco </p>
		  </div>
		</div>
	    </div>
	  </div>
	</div>
      </div>
    </b-col>


    <b-col>
      <div class="brand-card">
          <div class="brand-card-header bg-facebook p-3">
            <h1 class="text-white"><i class="fa fa-bolt ml-2"></i>Électricité</h1>
        </div>
      <div class="container">
        <div class="card-body container">
            <div class="row vdivide p-6">
                <div class="col-sm-6 text-center">
                  <div>
                      <div class="text-value " style="font-size:40px;"><i class="fa fa-arrow-up mr-1"></i>170 kWh</div>
                      <div class="text-uppercase small">Consommation estimée</div>
                  </div>
    	       </div>
            <div class="col-sm-6 text-center text-danger">
                  <div>
                   <div class="text-value" style="font-size:40px;"><i class="fa fa-arrow-up mr-1"> </i>70€</div>
                      <div class="text-uppercase small">Facture estimée</div>
                  </div>
             </div>
         </div>
       </div>
       <hr/>
          <div class="row justify-content-between text-danger">
            <div class="col-9" style="font-size:20px;">
              <i class="fa fa-exclamation-triangle" style="font-size:20px;" ></i> Vous consommez plus que la moyenne !
            </div>
            <div class="col-3 text-right">
	    	<h3 class="font-weight-bold">10%</h3>
            </div>
          </div>
          <div class="row justify-content-between text-success">
            <div class="col-8" style="font-size:20px;">
                Vous auriez pu economiser
            </div>
            <div class="col-2 text-right">
	    	<h3 class="font-weight-bold text-success">6€</h3>
            </div>
          </div>
        </div>
	<div class="container">
       <hr/>
	  <div class="row">
	    <div class="col">
	    <div class="card bg-info">
		  <div class="card-body">
		    <h5 class="card-title">Réfrigérateur</h5>
		    <p class="card-text">Lorsque vous préparez le repas, sortez du réfrigérateur tout ce qu’il vous faut avant de commencer, vous éviterez la déperdition d’air froid.</p>
		  </div>
		</div>
	    </div>
	    <div class="col">
	    <div class="card bg-info">
		  <div class="card-body">
		    <h5 class="card-title">Ampoules</h5>
		    <p class="card-text">Remplacez vos ampoules traditionnelles par des ampoules à économie d’énergie (ampoules basse consommation, ampoules LED) qui durent trois fois plus et consomment trois fois moins.</p>
		  </div>
		</div>
	    </div>
	    <div class="col">
	    <div class="card bg-info">
		  <div class="card-body">
		    <h5 class="card-title">Cuisine</h5>
		    <p class="card-text">Faites bouillir de l’eau dans une casserole couverte demande 4 fois moins d’énergie</p>
		  </div>
		</div>
	    </div>
	  </div>
	</div>
      </div>
    </b-col>
    </b-row>



    </div>
</template>

<script>
  import CardLine1ChartExample from './dashboard/CardLine1ChartExample'
  import CardLine2ChartExample from './dashboard/CardLine2ChartExample'
  import CardLine3ChartExample from './dashboard/CardLine3ChartExample'
  import CardBarChartExample from './dashboard/CardBarChartExample'
  import SocialBoxChartExample from './dashboard/SocialBoxChartExample'
  import CalloutChartExample from './dashboard/CalloutChartExample'
  import { Callout } from '@coreui/vue'

  export default {
    name: 'dashboard',
    components: {
      Callout,
      CardLine1ChartExample,
      CardLine2ChartExample,
      CardLine3ChartExample,
      CardBarChartExample,
      SocialBoxChartExample,
      CalloutChartExample,
      //new
    },
    data: function () {
      return {
        energyTypeChart: 'elec',
        selected: 'Month',
        tableItems: [
          {
            avatar: { url: 'img/avatars/1.jpg', status: 'success' },
            user: { name: 'Yiorgos Avraamu', new: true, registered: 'Jan 1, 2015' },
            country: { name: 'USA', flag: 'us' },
            usage: { value: 50, period: 'Jun 11, 2015 - Jul 10, 2015' },
            payment: { name: 'Mastercard', icon: 'fa fa-cc-mastercard' },
            activity: '10 sec ago'
          },
          {
            avatar: { url: 'img/avatars/2.jpg', status: 'danger' },
            user: { name: 'Avram Tarasios', new: false, registered: 'Jan 1, 2015' },
            country: { name: 'Brazil', flag: 'br' },
            usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
            payment: { name: 'Visa', icon: 'fa fa-cc-visa' },
            activity: '5 minutes ago'
          },
          {
            avatar: { url: 'img/avatars/3.jpg', status: 'warning' },
            user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2015' },
            country: { name: 'India', flag: 'in' },
            usage: { value: 74, period: 'Jun 11, 2015 - Jul 10, 2015' },
            payment: { name: 'Stripe', icon: 'fa fa-cc-stripe' },
            activity: '1 hour ago'
          },
          {
            avatar: { url: 'img/avatars/4.jpg', status: '' },
            user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2015' },
            country: { name: 'France', flag: 'fr' },
            usage: { value: 98, period: 'Jun 11, 2015 - Jul 10, 2015' },
            payment: { name: 'PayPal', icon: 'fa fa-paypal' },
            activity: 'Last month'
          },
          {
            avatar: { url: 'img/avatars/5.jpg', status: 'success' },
            user: { name: 'Agapetus Tadeáš', new: true, registered: 'Jan 1, 2015' },
            country: { name: 'Spain', flag: 'es' },
            usage: { value: 22, period: 'Jun 11, 2015 - Jul 10, 2015' },
            payment: { name: 'Google Wallet', icon: 'fa fa-google-wallet' },
            activity: 'Last week'
          },
          {
            avatar: { url: 'img/avatars/6.jpg', status: 'danger' },
            user: { name: 'Friderik Dávid', new: true, registered: 'Jan 1, 2015' },
            country: { name: 'Poland', flag: 'pl' },
            usage: { value: 43, period: 'Jun 11, 2015 - Jul 10, 2015' },
            payment: { name: 'Amex', icon: 'fa fa-cc-amex' },
            activity: 'Last week'
          }
        ],
        tableFields: {
          avatar: {
            label: '<i class="icon-people"></i>',
            class: 'text-center'
          },
          user: {
            label: 'User'
          },
          country: {
            label: 'Country',
            class: 'text-center'
          },
          usage: {
            label: 'Usage'
          },
          payment: {
            label: 'Payment method',
            class: 'text-center'
          },
          activity: {
            label: 'Activity'
          }
        }
      }
    },
    methods: {
      variant (value) {
        let $variant
        if (value <= 25) {
          $variant = 'info'
        } else if (value > 25 && value <= 50) {
          $variant = 'success'
        } else if (value > 50 && value <= 75) {
          $variant = 'warning'
        } else if (value > 75 && value <= 100) {
          $variant = 'danger'
        }
        return $variant
      },
      flag (value) {
        return 'flag-icon flag-icon-' + value
      }
    }
  }
</script>

<style>
    /* IE fix */
    #card-chart-01, #card-chart-02 {
        width: 100% !important;
    }

    .row.vdivide [class*='col-']:not(:last-child):after {
        background: #e0e0e0;
        width: 1px;
        content: "";
        display:block;
        position: absolute;
        top:0;
        bottom: 10px;
        right: 0;
        min-height: 70px;
        margin-bottom: 20px
    }


</style>
