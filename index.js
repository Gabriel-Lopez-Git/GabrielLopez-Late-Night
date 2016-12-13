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
  var userName= $('#usr').val()
  var password= $('#pwd').val()
  var user = store.get(userName);
  console.log('in login');
  if(user){
    if(user.password !== password){
      alert("Incorrect Login, please try again");
      return;
    }
    else{
      console.log('success');
      console.log(user);
    }
  }
  /*CODE FOR SUCCESSFUL LOGIN GOES HERE*/
  return;
}

function joinUser() {
  var name = $('#name').val()
  var userName= $('#username').val()
  var password= $('#password').val()
  var confirmPass= $('#confirmpwd').val()
  var email= $('#email').val()
  var address= $('#address').val()

  if(confirmPass !== password){
    alert("Your passwords don't match, please update and try again");
    setValues(name, userName, password, confirmPass, email, address);
    return;
  }

  if(!name || !userName || !password || !confirmPass || !email || !address){
    alert("Please fill in all fields")
    setValues(name, userName, password, confirmPass, email, address);
    return;
  }

  store.set(userName,
  {
    name: name,
    password: password,
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
