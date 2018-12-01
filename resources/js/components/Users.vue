<template>
   
        <div class="row mt-5">
            <div class="col-1"></div>
          <div class="col-10">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">Listado de Usuarios</h3>

                <div class="card-tools">
                    <button class="btn btn-success " data-toggle="modal" data-target="#exampleModal">Nuevo Usuario <i class="fa fa-user-plus fa-fw"></i></button>
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
                  <tr>
                    <td>183</td>
                    <td>John Doe</td>
                    <td>11-7-2014</td>
                    <td><span class="tag tag-success">Approved</span></td>
                    <td>
                        <a href=""> <i class="fa fa-edit"></i> </a>
                        /
                        <a href=""> <i class="fa fa-trash red"></i> </a>

                    </td>
                  </tr>
                  
                </tbody></table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>


          <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Añadir nuevo Usuario</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        
          	
				<form class="cd-signin-modal__form">
					<p class="cd-signin-modal__fieldset">
                       <label class="cd-signin-modal__label cd-signin-modal__label--username cd-signin-modal__label--image-replace" for="signup-username">Nombre</label>
                        <input placeholder="Nombre del Usuario" v-model="form.name" type="text" id="signup-username" name="name" class="form-control cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" :class="{ 'is-invalid': form.errors.has('name') }">
                        <has-error :form="form" field="name"></has-error>
					</p>

					<p class="cd-signin-modal__fieldset">
						<label class="cd-signin-modal__label cd-signin-modal__label--email cd-signin-modal__label--image-replace" for="signup-email">E-mail</label>
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-email" type="email" placeholder="E-mail">
						
					</p>

					<p class="cd-signin-modal__fieldset">
						<label class="cd-signin-modal__label cd-signin-modal__label--password cd-signin-modal__label--image-replace" for="signup-password">Password</label>
						<input class="cd-signin-modal__input cd-signin-modal__input--full-width cd-signin-modal__input--has-padding cd-signin-modal__input--has-border" id="signup-password" type="text"  placeholder="Password">
					
						
					</p>

				<button type="submit" class="btn btn-info btn-lg btn-block">Crear Usuario</button>
                <button type="button" class="btn btn-block btn-danger btn-lg">Info</button>
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
                form: new Form({
                    name: '',
                    email: '',
                    password: '',
                    type: '',
                    photo: '',

                
                })
            }
        },
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
