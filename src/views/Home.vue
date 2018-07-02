<template>
    <div class="row">
        <div class="col-3">
        <q-page>
            <q-card>
                <q-card-title>
                    Consommation d'eau
                    <div slot="right" class="row items-center">
                        75/100(L) <q-icon class="on-right" name="ion-water" /> 
                    </div>  
                </q-card-title>
                <q-card-separator />
                <q-card-main>
                    <div class="row justify-between">
                        <div>01/06</div><div>30/06</div>
                    </div>    
                    <q-progress  style="width: 100%":percentage=80 color="orange"/>
                </q-card-main>
            </q-card>
        </q-page>
        </div>
         <div class="col-3">
        <q-page>
            <q-card>
                <q-card-title>
                    Consommation d'életricité
                    <div slot="right" class="row items-center">
                        160/170(kWh) <q-icon class="on-right" name="ion-flash" /> 
                    </div>  
                </q-card-title>
                <q-card-separator />
                <q-card-main>
                    <div class="row justify-between">
                        <div>01/06</div><div>30/06</div>
                    </div>    
                    <q-progress  style="width: 100%":percentage=85 color="red"/>
                </q-card-main>
            </q-card>
        </q-page>
        </div>
    </div> 
</template>

<style>
</style>

<script>
export default {
  name: "PageHome"
};
</script>
