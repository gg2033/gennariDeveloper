<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height p-4">
      <div class="container pt-3">
        <div class="row pb-5">
          <div class="col-lg-6 pt-4 my-auto">
            <div class="text-center  mb-3 d-block d-lg-none">
              <h1 class="display-3">{{name_profesional}}</h1>
              <h3>{{job_profesional}}</h3>
            </div>
            <img src="../assets/ProfileHome.png" alt="gennari gustavo home">
          </div>
          <div class="col-lg-6">
            <div class="text-center mb-3 d-none d-lg-block">
              <h1 class="display-3">{{name_profesional}}</h1>
              <h3>{{job_profesional}}</h3>
            </div>

            <div class="border p-3 p-md-5 bg-white mt-4 rounded shadow">
              <h2>Contacto</h2>
              <form @submit.prevent="sendEmail()">
                <label for="email">Email</label>
               <input v-model="email" type="text" class='form-control' name="emailClient" id="emailClient" placeholder="juan@gmail.com..">
                <label for="message">Mensaje</label>
               
                <textarea v-model="message" name="messageBody" class="form-control mb-3" id="bodyMessage" rows="6" style="min-width: 100%"></textarea>
                <small class="form-text text-muted d-block">Cualquier duda o información que necesites enviamela...</small>
                <input type="button" class="btn btn-primary" value="Enviar">
                <div class="mt-4">
                    <p class="m-0">{{messageResult}}</p>
                </div>
              </form>
            </div>
          </div>
  

         </div>
      </div>
    
    </div>
    <div id="about" class="about bg-light p-4 p-md-5">
    <div class="row">
       <h1>Proyectos</h1>
      <div class="col-lg">
          <img height="120" class="m-4" src="../assets/icons/blue-box-icon.svg" alt="proyecto 1">
          <h5 class="ml-md-4 mr-md-4">Este proyecto es un algo....</h5>
      </div>

      <div class="col-lg">
          <img height="120" class="m-4" src="../assets/icons/blue-box-icon.svg" alt="proyecto 1">
          <h5 class="ml-md-4 mr-md-4">Este proyecto es un algo....</h5>
      </div>


      <div class="col-lg">
          <img height="120" class="m-4" src="../assets/icons/blue-box-icon.svg" alt="proyecto 1">
          <h5 class="ml-md-4 mr-md-4">Este proyecto es un algo....</h5>
      </div>
    </div>
  
    </div>
    <div id="projects" class="bg-success p-4"></div>
    <div id="contact" class="bg-primary p-4"></div>
    <div id="footer" class="bg-dark p-4"></div>
  </div>
</template>

<script>
import {Auth} from '@/firebase/auth.js';

export default {

  data () {
    return {
      name_profesional: 'Gennari Gustavo',
      job_profesional : 'Developer Web',
      email : '',
      message : '',
      messageResult : 'Mensaje Enviado'
    }
  
  }, 
  methods:{
    sendEmail : function(event){
    console.log("enviar mail");

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-page{
  background-color: #92d2f2;
  background: url('../assets/background-home.jpg') no-repeat center center;
}

#about{
min-height: 40vh;
/*background: url('../assets/background-projects.jpg') no-repeat center center;*/

}
</style>
