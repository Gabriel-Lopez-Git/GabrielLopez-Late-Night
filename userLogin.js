function change() {

  if(document.getElementById('loginPage').style.display == 'none'){
    document.getElementById('loginPage').style.display = 'block'
    document.getElementById('newUserPage').style.display = 'none'
  }
  else{
    document.getElementById('loginPage').style.display = 'none'
    document.getElementById('newUserPage').style.display = 'block'
  }
}

function login() {
  var userName= $('#usr').val().toLowerCase()
  var user = store.get(userName);
  console.log('in login');
  if(user){
    console.log(user);
    console.log('success');
    /*CODE FOR SUCCESSFUL LOGIN GOES HERE*/
    window.location.href = 'index.html'
    console.log($('#test').val());
  }
  else{
    alert("This username does not exist")
  }
  return;
}

function joinUser() {
  var name = $('#name').val()
  var userName= $('#username').val().toLowerCase()
  var email= $('#email').val()
  var address= $('#address').val()


  if(!name || !userName || !email || !address){
    alert("Please fill in all fields")
    setValues(name, userName, password, confirmPass, email, address);
    return;
  }

  if(store.get(userName)){
    alert('Username is already taken, please choose another');
    setValues(name, userName, password, confirmPass, email, address);
    return;
  }

  store.set(userName,
  {
    name: name,
    email: email,
    address: address
  })
  console.log(store.get(userName));
}

let setValues = function(name, userName, password, confirmPass, email, address) {
  $('#name').val(name)
  $('#username').val(userName)
  $('#password').val(password)
  $('#confirmpwd').val(confirmPass)
  $('#email').val(email)
  $('#address').val(address)
}
