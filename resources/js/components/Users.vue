<style>

.cd-signin-modal__label {
  font-size: 1.4rem;
}
.cd-signin-modal__label.cd-signin-modal__label--username {
  background-image: url("~/img/cd-icon-username.svg");
}

.cd-signin-modal__label.cd-signin-modal__label--email {
  background-image: url("~/img/cd-icon-email.svg");
}

.cd-signin-modal__label.cd-signin-modal__label--password {
  background-image: url("~/img/cd-icon-password.svg");
}
.cd-signin-modal__label.cd-signin-modal__label--image-replace {
  /* replace text with an icon */
  display: inline-block;
  position: absolute;
  left: 15px;
  top: 50%;
  bottom: auto;
  -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
          transform: translateY(-50%);
  height: 20px;
  width: 20px;
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  color: transparent;
  background-repeat: no-repeat;
  background-position: 50% 0;
}
.cd-signin-modal__input {
  margin: 0;
  padding: 0;
  border-radius: 0.25em;
}
.cd-signin-modal__input.cd-signin-modal__input--full-width {
  width: 100%;
}

.cd-signin-modal__input.cd-signin-modal__input--has-padding {
  padding: 12px 20px 12px 50px;
}

.cd-signin-modal__input.cd-signin-modal__input--has-border {
  border: 1px solid #d2d8d8;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.cd-signin-modal__fieldset {
  position: relative;
  margin: 1.4em 0;
}

.cd-signin-modal__fieldset:first-child {
  margin-top: 0;
}

.cd-signin-modal__fieldset:last-child {
  margin-bottom: 0;
}

.cd-signin-modal__input[type=submit] {
  padding: 16px 0;
  cursor: pointer;
  background: #2f889a;
  color: #FFF;
  font-weight: bold;
  border: none;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.cd-signin-modal__input[type=submit]:hover, .cd-signin-modal__input[type=submit]:focus {
  background: #3599ae;
  outline: none;
}
</style>

<template>
   
        <div class="row mt-5">
                  <div class="col-1"></div>
          <div class="col-10">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Listado de Usuarios</h3>

                <div class="card-tools">
                    <button class="btn btn-success " @click="nuevaModal">Nuevo Usuario <i class="fa fa-user-plus fa-fw"></i></button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover">
                  <tbody><tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Email</th>
                    <th>Tipo</th>
                    <th>Modificar</th>
                  </tr>
                  <tr v-for="user in users" :key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}} </td>
                    <td>{{user.type | Mayus}} </td>
                    <td>
                        <a href="#" @click.prevent="editarModal(user)"> 
                          <i class="fa fa-edit"></i> 
                        </a>
                        /
                        <a href="#" @click.prevent="EliminarUsuario(user.id)">
                           <i class="fa fa-trash red"></i>
                        </a>

                    </td>
                  </tr>
                  
                </tbody></table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>


          <!-- Modal -->
<div class="modal fade" id="formularioUsuarios" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 v-show="!edicion" class="modal-title" id="exampleModalLabel">Añadir nuevo Usuario</h5>
        <h5 v-show="edicion" class="modal-title" id="exampleModalLabel">Actualizar usuario {{form.name}}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>

      <div class="modal-body">
				<form @submit.prevent="edicion ? editarUsuario() : crearUsuario()" class="cd-signin-modal__form">
					<p class="cd-signin-modal__fieldset form-group">
                       <label class="cd-signin-modal__label cd-signin-modal__label--username cd-signin-modal__label--image-replace" for="signup-username">Nombre</label>
                        <input placeholder="Nombre del Usuario" v-model="form.name" type="text" id="signup-username" name="name" class="form-control cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
					</p>

					<p class="cd-signin-modal__fieldset">
                       <label class="cd-signin-modal__label cd-signin-modal__label--email cd-signin-modal__label--image-replace" for="signup-email">Nombre</label>
                        <input placeholder="Email del Usuario" v-model="form.email" type="email" id="signup-email" name="email" class="form-control cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" :class="{ 'is-invalid': form.errors.has('email') }">
                        <has-error :form="form" field="email"></has-error>
					</p>

          <p class="cd-signin-modal__fieldset">
            
              <select name="type" v-model="form.type" id="type" class="form-control" :class="{ 'is-invalid': form.errors.has('type') }">
                  <option value="">Selecciona rol de Usuario</option>
                  <option value="apoderado">   Apoderado</option>
                  <option value="profesor">   Profesor</option>
                  <option value="alumno">   Alumno</option>
              </select>
              <has-error :form="form" field="type"></has-error>
          </p>

					<p class="cd-signin-modal__fieldset">
                       <label class="cd-signin-modal__label cd-signin-modal__label--password cd-signin-modal__label--image-replace" for="signup-password">Nombre</label>
                        <input placeholder="Password del Usuario" v-model="form.password" type="password" id="signup-password" name="password" class="form-control cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" :class="{ 'is-invalid': form.errors.has('password') }">
                        <has-error :form="form" field="password"></has-error>
					</p>

          <button v-show="!edicion" type="submit" class="btn btn-success btn-lg btn-block">Crear Usuario</button>
          <button v-show="edicion" type="submit" class="btn btn-primary btn-lg btn-block">Actualizar Usuario</button>



				</form>
			

    </div>
  </div>
</div>
        </div>
        </div>
  
</template>




<script>
    export default {
        data () {
            return {
                edicion: false,
                users: {},
                form: new Form({
                    name: '',
                    email: '',
                    password: '',
                    type: '',
                    photo: '',

                
                })
            }
        },

        methods:{
          editarUsuario(){
            this.$Progress.start()

          },
          crearUsuario(){
            this.$Progress.start()
            this.form.post('api/user')
            .then(()=>{
              NewVue.$emit('After');
              toast({
                    type: 'success',
                    title: 'Usuario ingresado exitosamente'
                  })
              this.$Progress.finish()
            })
            .catch(()=>{
                  toast({
                    type: 'error',
                    title: 'Problema al ingresar Usuario'
                  })
                  this.$Progress.finish()
            })

          },
          CargarUsuarios(){ 
            axios.get("api/user").then(({ data }) => (this.users = data.data));
          },
          EliminarUsuario(id){

            wal({
                    title: '¿Está Seguro?',
                    text: "Luego no podrá revertir la operación",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Sí, eliminar'
                  }).then((result) => {
                        // Send request to the server
                         if (result.value) {
                                this.form.delete('api/user/'+id).then(()=>{
                                        wal(
                                        'Eliminado',
                                        'El Usuario ha sido eliminado exitosamente',
                                        'success'
                                        )
                                    NewVue.$emit('After');
                                }).catch(()=> {
                                    wal("Fallo!", "Hubo un error al tratar de elminar al usuario", "warning");
                                });
                         }
                    })


          },
          nuevaModal(){
            this.edicion=false;
            this.form.reset();
            $('#formularioUsuarios').modal('show')
          },
          editarModal(user){
            this.edicion=true;
            this.form.clear();
            $('#formularioUsuarios').modal('show')
            this.form.fill(user)
            
          }


        },
        created() {
         
            this.CargarUsuarios();
            NewVue.$on('After',()=>{this.CargarUsuarios()});
          
        }
    }
</script>
