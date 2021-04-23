<html>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    </head>
    <body style="background-color:#f0f0f0">
        <div class="container-fluid w-50 mt-4">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <div class="shadow p-2 bg-white">
                        <h1 class="display-5">Login</h1>
                        <form action="" method="POST">
                            <INPUt type="text" class="form-control mb-2" placeholder="E-mail" name="mail"></INPUt>
                            <INPUt type="text" class="form-control mb-2" placeholder="Password" name="password"></INPUt>
                        
                            <input type="submit" value="Login" class="btn btn-primary w-100 mt-3">
                        </form>
                        <a href='register.php'>Register<a>
                    </div>
                </div>            
            </div>
        </div>
    </body>

</html>

<?php

if($_POST){
  
    $email = $_POST['mail'];
    $password = $_POST['password'];
      
    include("conn.php");

    $stmt = $conn->prepare("SELECT * FROM users WHERE user_mail=? && user_password=?");
    $stmt->bind_param("ss",$email,$password);

   $stmt->execute();
   $result = $stmt->get_result();

   if($result->num_rows>0){
       $row = $result->fetch_assoc();

       session_start();
       $_SESSION['sess_user_fname'] = $row['user_fname'];
       $_SESSION['sess_user_lname'] = $row['user_lname'];
       $_SESSION['sess_user_id'] = $row['user_id'];

       echo "Welcome ".$row['user_fname'];
       header("location:home.php");
   }else{
       echo "no user with this ...";
   }
}

?>