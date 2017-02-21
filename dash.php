<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Veterinaria Kaluja</title>


    <!-- Bootstrap Core CSS -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Plugin CSS -->
    <link rel="stylesheet" href="vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.css">
    <link rel="stylesheet" href="vendor/device-mockups/device-mockups.min.css">
    <link rel="stylesheet" href="css/jquery.datetimepicker.min.css" />


    <!-- Theme CSS 
    -->
    <link href="css/general.css" rel="stylesheet">
    <link href="css/menu.css" rel="stylesheet">

     <!-- jQuery -->
    <script src="vendor/jquery/jquery.min.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
    <!--googleMaps-->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFeZc4OlZB_tB_vKtQu6z3vEuqiieQ1_4&libraries=adsense&sensor=true&language=es"></script>
    <!--Inicio-->
    <script src="js/inicio.js"></script>
    <script src="js/menu.js"></script>
    <script src="http://libregps.org/assets/js/jquery.datetimepicker.full.min.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">  <link href='http://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet'>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<style type="text/css">
    body{
        background: url(http://i.imgur.com/GHr12sH.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    }
</style>
<script type="text/javascript">
  $(document).ready(function(){
    $("#load_dash").load("")
  })
</script>
<body>
<div class="site-container">

<!-- MENU DE PRUEBAS-->
  <div class="site-pusher"> 
  <header class="header">            
  <a href="#" class="header__icon" id="header__icon"></a>      
  <a href="#" class="header__logo"><img src="logo.png" width="100px"></a>            
  <nav class="menu">        
    <a href="#" id="curso_dash"><i class="fa fa-refresh" aria-hidden="true"></i> En curso</a>        
    <a href="#" id="mascotas_dash"><i class="fa fa-paw" aria-hidden="true"></i> Mascotas</a>        
    <a href="#" id="servicios_dash"><i class="fa fa-car" aria-hidden="true"></i> Servicios</a> 

    <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#">
           <i class="fa fa-commenting" aria-hidden="true"></i> Soporte 
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
          <span class="caret"></span></a>
          <ul class="dropdown-menu dropdown-content">
          <li><a id="s_mejora" href="#"><i class="fa fa-puzzle-piece" aria-hidden="true"></i> Sugerencia de mejora </a></li>
          <li><a id="s_ayuda" href="#"><i class="fa fa-info-circle" aria-hidden="true"></i> Ayuda </a></li>
            <li><a id="s_falla" href="#"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> Informar Falla </a></li>
          </ul>
    </li>
       
  </nav>          
  </header>    
  <div class="site-content">      
  <div class="container">                


<!--Multi Modal-->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title" id="modal-header"></h4>
      </div>
      <div class="modal-body" id="modal-body">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
      </div>
    </div>

  </div>
</div>

<div id="load_dash"></div>