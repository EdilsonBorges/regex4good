<!DOCTYPE html>
<html lang="en">
   <head>
      <title>Bootstrap Example</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
   </head>
   <body>
      <?php
         $comment = '';
         if ($_SERVER["REQUEST_METHOD"] == "POST") {
         	$initialValue = $_POST["comment"];
          	if (!empty($_POST["comment"])) {
          		for ($i=0; $i < 5; $i++) { 
         			$regex = '/([$][a-z]*)[_]([a-z])([a-z]*)/';
         			$subst = '$1$2$3';
         			$comment = preg_replace($regex,$subst,$_POST["comment"]);
     			}
             }
         
         }
         ?>
      <div class="container">
         <h2>regex4good:</h2>
         <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">  
            <textarea name="comment" value="comment" rows="15" cols="150"><?php echo $initialValue;?></textarea>
            <br><br>
            <input type="submit" class="btn btn-default" name="submit" value="Submit">  
         </form>
         <?php
            echo "<h2>Your code:</h2>";
            echo $comment;
            ?>
      </div>
   </body>
</html>