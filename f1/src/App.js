import './App.css';
import { useState } from "react"
import './S1.css';

function App() {

  const [edit, setedit] = useState(false);
  const [edit1, setedit1] = useState('');
  const [Main, setmain] = useState([]);
  const [Name, setName] = useState([]);
  const [Contact, setContact] = useState([]);
  const [Email, setEmail] = useState([]);
  const [Gender, setGender] = useState([]);
  const [City, setCity] = useState([]);
  // const [Detail, setdetails] = useState({ Name: Name, Contact: Contact, Email: Email, Gender: Gender, City: City });

  function formhandler() {

    let obj = {
      Name: Name,
      Contact: Contact,
      Email: Email,
      Gender: Gender,
      City: City
    }
    if (edit) {
      const updatedobject = Main.map((user, ind) =>
        ind === edit1 ? obj : user
      );
      setmain(updatedobject);

    }
    else {
      setmain([...Main, obj]);
    }
    setName(" ");
    setContact(" ");
    setEmail(" ");
    setGender(" ");
    setCity(" ");
  }
  const delete1 = (i) => {
    Main.splice(i, 1);
    setmain([...Main]);
  }
  const edithand = (i) => {
    setedit(true);
    setedit1(i);
    const getdata = Main[i];

    setName(getdata.Name);
    setContact(getdata.Contact);
    setEmail(getdata.Email);
    setGender(getdata.Gender);
    setCity(getdata.City);



  }


  return (
    <>
      <div>
        <form >
          <table align='center'>
            <tr>
              <th>NAME</th>
              <td>
                <input type="text" onChange={(e) => { setName(e.target.value) }} value={Name}></input>
              </td>
            </tr>
            <tr>
              <th>CONTACT</th>
              <td>
                <input type="text" onChange={(e) => { setContact(e.target.value) }} value={Contact}></input>
              </td>
            </tr>
            <tr>
              <th>EMAIL</th>
              <td>
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} value={Email}></input>
              </td>
            </tr>
            <tr>
              <th>GENDER</th>
              <td>
                <input type="text" onChange={(e) => { setGender(e.target.value) }} value={Gender}></input>
              </td>
            </tr>
            <tr>
              <th>CITY</th>
              <td>
                <input type="text" onChange={(e) => { setCity(e.target.value) }} value={City} ></input>
              </td>
            </tr>
          </table>
          <div>
            <input className="r2" type="button" value="SUBMIT" onClick={formhandler}></input>
          </div>
        </form>
      </div>
      <div>
        <table align="center" className='f1'>
          <tr>
            <td>ID</td>
            <td>RNO</td>
            <td>NAME</td>
            <td>CONTACT</td>
            <td>EMAIL</td>
            <td>GENDER</td>
            <td>CITY</td>
          </tr>
          {
            Main.map((item, i) => {
              return (
                <tr>
                  <td>{i}</td>
                  <td>{item.rno}</td>
                  <td>{item.Name}</td>
                  <td>{item.Contact}</td>
                  <td>{item.Email}</td>
                  <td>{item.Gender}</td>
                  <td>{item.City}</td>
                  <td><input type="button" value="EDIT" onClick={() => { edithand(i) }}></input></td>
                  <td><input type="button" value="DELETE" onClick={() => { delete1(i) }}></input></td>
                </tr>
              )
            })
          }



        </table>

      </div>

    </>
  );
}

export default App; 
