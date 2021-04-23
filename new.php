<?php

session_start();

if(!isset($_SESSION['sess_user_id'])){
    header("location:home.php");
}

?>

<html>
    <head> </head>
    <body>
        <form action="" method="POST" enctype="multipart/form-data">
            <input type="text" placeholder="Rec name" name="recname"><br>
            <input type="text" placeholder="Rec short desc" name="recshortdesc"><br>
            <input type="file" name="imagefile"><br>
            <textarea name="rec_desc" placeholder="Rec steps" cols="30" rows="10"></textarea><br>
            <input type="submit" value="Upload">
        </form>

    </body>

</html>

<?php
if($_POST){
    $image = $_FILES['imagefile']['name'];


    $recname = $_POST['recname'];
    $recshortdesc = $_POST['recshortdesc'];
    $rec_desc = $_POST['rec_desc'];

    $target = "images/".basename($image);

    if(move_uploaded_file($_FILES['imagefile']['tmp_name'],$target)){
        echo "ok";
    }else{
        echo "error";
    }

    include("conn.php");

    $stmt = $conn->prepare("INSERT INTO recipes (user_id ,rec_name ,rec_image ,rec_short_desc ,rec_desc ) VALUES (?,?,?,?,?)");
    $stmt->bind_param("sssss",$_SESSION['sess_user_id'],$recname,$image,$recshortdesc,$rec_desc);

    if($stmt->execute()){
        echo "done";
    }else{
        echo "error";
    }

}

?>