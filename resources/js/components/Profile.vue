<style>
.widget-user-header{
    background-position: center center;
    background-size: cover;
   height: 250px !important;
}
.widget-user .card-footer{
    padding: 0;
}

.size140{
    object-fit: cover;
    width: 150px !important;
    height: 150px !important;
}
</style>


<template>
  <div class="container">
        <div class="row ">
            <div class="col-md-12 mt-3">
<div class="card card-widget widget-user">
              <!-- Add the bg color to the header using any of the bg-* classes -->
              <div class="widget-user-header text-white" style="background: url('../img/photo1.png') center center;">
                <h3 class="widget-user-username">{{this.form.name}}</h3>
                <h5 class="widget-user-desc">{{this.form.type}}</h5>
              </div>
              <div class="widget-user-image">
                <img class="img-circle size140" :src="getProfilePhoto()" alt="Perfil de Usuario">
              </div>
              <div class="card-footer">
                <div class="row">
                  <div class="col-sm-6 border-right">
                    <div class="description-block">
                      <h5 class="description-header">3,200</h5>
                      <span class="description-text">Alumnos</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->

                  <!-- /.col -->
                  <div class="col-sm-6">
                    <div class="description-block">
                      <h5 class="description-header">35</h5>
                      <span class="description-text">Cursos</span>
                    </div>
                    <!-- /.description-block -->
                  </div>
                  <!-- /.col -->
                </div>
                <!-- /.row -->
              </div>
            </div>
            </div>
        </div>

            <div class="card">
              <div class="card-header p-2">
                <ul class="nav nav-pills">
                  <li class="nav-item"><a class="nav-link" href="#timeline" data-toggle="tab">Timeline</a></li>
                  <li class="nav-item"><a class="nav-link active show" href="#settings" data-toggle="tab">Settings</a></li>
                </ul>
              </div><!-- /.card-header -->
              <div class="card-body">
                <div class="tab-content">

                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="timeline">
                    <!-- The timeline -->
                    <ul class="timeline timeline-inverse">
                      <!-- timeline time label -->
                      <li class="time-label">
                        <span class="bg-danger">
                          10 Feb. 2014
                        </span>
                      </li>
                      <!-- /.timeline-label -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-envelope bg-primary"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="fa fa-clock-o"></i> 12:05</span>

                          <h3 class="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                          <div class="timeline-body">
                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                            quora plaxo ideeli hulu weebly balihoo...
                          </div>
                          <div class="timeline-footer">
                            <a href="#" class="btn btn-primary btn-sm">Read more</a>
                            <a href="#" class="btn btn-danger btn-sm">Delete</a>
                          </div>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-user bg-info"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="fa fa-clock-o"></i> 5 mins ago</span>

                          <h3 class="timeline-header no-border"><a href="#">Sarah Young</a> accepted your friend request
                          </h3>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-comments bg-warning"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="fa fa-clock-o"></i> 27 mins ago</span>

                          <h3 class="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                          <div class="timeline-body">
                            Take me to your leader!
                            Switzerland is small and neutral!
                            We are more like Germany, ambitious and misunderstood!
                          </div>
                          <div class="timeline-footer">
                            <a href="#" class="btn btn-warning btn-flat btn-sm">View comment</a>
                          </div>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <!-- timeline time label -->
                      <li class="time-label">
                        <span class="bg-success">
                          3 Jan. 2014
                        </span>
                      </li>
                      <!-- /.timeline-label -->
                      <!-- timeline item -->
                      <li>
                        <i class="fa fa-camera bg-purple"></i>

                        <div class="timeline-item">
                          <span class="time"><i class="fa fa-clock-o"></i> 2 days ago</span>

                          <h3 class="timeline-header"><a href="#">Mina Lee</a> uploaded new photos</h3>

                          <div class="timeline-body">
                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                            <img src="http://placehold.it/150x100" alt="..." class="margin">
                          </div>
                        </div>
                      </li>
                      <!-- END timeline item -->
                      <li>
                        <i class="fa fa-clock-o bg-gray"></i>
                      </li>
                    </ul>
                  </div>
                  <!-- /.tab-pane -->

<div class="tab-pane active show" id="settings">
                                    
                                <form class="form-horizontal">
                                <div class="form-group">
                                    <label for="inputName" class="col-sm-2 control-label">Nombre</label>

                                    <div class="col-sm-12">
                                    <input type="" v-model="form.name" class="form-control" id="inputName" placeholder="Name" :class="{ 'is-invalid': form.errors.has('name') }">
                                     <has-error :form="form" field="name"></has-error>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="inputEmail" class="col-sm-2 control-label">Email</label>

                                    <div class="col-sm-12">
                                    <input type="email" v-model="form.email" class="form-control" id="inputEmail" placeholder="Email"  :class="{ 'is-invalid': form.errors.has('email') }">
                                     <has-error :form="form" field="email"></has-error>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="photo" class="col-sm-2 control-label">Foto de Perfil</label>
                                    <div class="col-sm-12">
                                        <input type="file" @change="subirFoto" name="photo" class="form-input">
                                    </div>

                                </div>

                                <div class="form-group">
                                    <label for="password" class="col-sm-12 control-label">Password (dejar vacío si no lo desea cambiar)</label>

                                    <div class="col-sm-12">
                                    <input type="password"
                                        v-model="form.password"
                                        class="form-control"
                                        id="password"
                                        placeholder="Password"
                                        :class="{ 'is-invalid': form.errors.has('password') }"
                                    >
                                     <has-error :form="form" field="password"></has-error>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-12">
                                    <button @click.prevent="actualizarInfo" type="submit" class="btn btn-success">Update</button>
                                    </div>
                                </div>
                                </form>
</div>
                  <!-- /.tab-pane -->
                </div>
                <!-- /.tab-content -->
              </div><!-- /.card-body -->
            </div>
        </div>
      
        

</template>

<script>
    export default {

        data(){
            return{
                form: new Form({
                    id: '',
                    name: '',
                    email: '',
                    password: '',
                    type: '',
                    photo: '',

                
                }),
            }
        },

        mounted() {
            console.log('Component mounted.')
        },

        methods:{
            getProfilePhoto(){
                let photo = (this.form.photo.length > 200) ? this.form.photo : "img/profile/"+ this.form.photo ;
                return photo;
                console.log(photo);
            },
            subirFoto(e){
                let file = e.target.files[0];
                let reader = new FileReader();
                reader.onloadend = (file) => {
                    this.form.photo = reader.result;
                }
                reader.readAsDataURL(file);

            },
            actualizarInfo(){
                this.$Progress.start()
                this.form.put('api/profile/')
                .then(()=>{
                    this.cargarInfo();
                    this.$Progress.finish();
                                  wal(
                    'Actualizado',
                    'El Usuario ha sido actualizado exitosamente',
                    'success'
                    )
                })
                .catch(()=>{
                    this.$Progress.fail();
                });
            },
            cargarInfo(){
              
              axios.get('api/profile')
              .then(({data})=>(this.form.fill(data)) )
              .catch();
            }



        },
        created(){
          this.cargarInfo();
        }
    }
</script>
