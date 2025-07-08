<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Fundraiser Progress</title>
<style>
  body {
    font-family: Arial, sans-serif;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
  .progress-container {
    width: 90%;
    max-width: 600px;
  }
  .progress-bar {
    background: #e0e0e0;
    border-radius: 20px;
    overflow: hidden;
    height: 30px;
    position: relative;
    box-shadow: inset 0 2px 5px rgba(0,0,0,0.1);
  }
  .progress-fill {
    background: #2196f3;
    height: 100%;
    width: 0;
    border-radius: 20px 0 0 20px;
    transition: width 1s ease;
  }
  .progress-text {
    position: absolute;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    color: #000;
    user-select: none;
  }
</style>
</head>
<body>
  <div class="progress-container">
    <div class="progress-bar">
      <div id="progress-fill" class="progress-fill"></div>
      <div id="progress-text" class="progress-text">0€ out of 2000€</div>
    </div>
  </div>

<script>
  const currentAmount = 0; // Change this dynamically
  const goalAmount = 2000;

  const percent = Math.min((currentAmount / goalAmount) * 100, 100);
  const fill = document.getElementById('progress-fill');
  const text = document.getElementById('progress-text');

  fill.style.width = percent + '%';
  text.textContent = `${currentAmount}€ out of ${goalAmount}€`;
</script>
</body>
</html>
