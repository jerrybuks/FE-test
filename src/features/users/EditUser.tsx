import React, { useState, useEffect } from "react";
import { User } from "./Users";

interface InitialState {
  first: string;
  last: string;
  username: string;
  num: number;
  name: string;
  city: string;
}

export default function EditUser({
  userData,
  onCancel,
  editUser
}: {
  userData: User;
  onCancel: () => void;
  editUser: (user: User) => void;
}) {
    console.log(userData,9999)
  const initialState: InitialState = {
    first: userData?.name?.first || "",
    last: userData?.name?.last || "",
    username: userData?.login?.username || "",
    num: userData?.location?.street?.number || 0,
    name: userData?.location?.street?.name || "",
    city: userData?.location?.city || "",
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState( {
        first: userData?.name?.first || "",
        last: userData?.name?.last || "",
        username: userData?.login?.username || "",
        num: userData?.location?.street?.number || 0,
        name: userData?.location?.street?.name || "",
        city: userData?.location?.city || ""
      })
  }, [userData])

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const { first, last, username, num, name, city } = state;
  onsubmit = (e) => {
       e.preventDefault()
      const user = {
          ...userData,
          name:{
              first : first,
              last: last
          },
          login:{
              ...userData.login,
              username : username,
          },
          location: {
              city: city,
                street: {
                    number: num,
                    name: name,
                },
                country:  userData.location.country
          }
      }
      editUser(user)
      onCancel();

  }
  
  return (
    <div className="form-inventory">
      <form className="utils-mg-tp-small">
        <h3 className="form-inventory__header">Edit User</h3>
        <fieldset className="form-inventory__body">
          <div>
            <label htmlFor="first"> First Name :</label>
            <input
              id="first"
              name="first"
              type="text"
              value={first}
              onChange={onchange}
              required
            />
          </div>
          <div>
            <label htmlFor="last">Last Name : </label>
            <input
              id="last"
              name="last"
              type="text"
              value={last}
              onChange={onchange}
              required
            />
          </div>
          <div>
            <label htmlFor="username"> Username :</label>
            <input
              id="username"
              name="username"
              type="text"
              value={username}
              onChange={onchange}
              required
            />
          </div>
          <div>
            <label htmlFor="num"> Street Number :</label>
            <input
              id="num"
              name="num"
              type="num"
              min="1"
              value={num}
              onChange={onchange}
              required
            />
          </div>
          <div>
            <label htmlFor="name"> name :</label>
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={onchange}
              required
            />
          </div>
          <div>
            <label htmlFor="city"> city :</label>
            <input
              id="city"
              name="city"
              type="text"
              value={city}
              onChange={onchange}
              required
            />
          </div>
          <div className="align-center ">
            <input className="btn btn--primary" type="submit" />
          </div>
        </fieldset>
      </form>
    </div>
  );
}
