import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useGetSpacexLaunchesQuery } from "../../services/users";
import Card from "../../common/card/Card";
import Spinner from "../../common/spinner/Spinner";
import Modal from "../../common/modal/Modal";
import edit from "../../assets/edit.svg";
import deleteIcon from "../../assets/delete.svg";
import EditUser from "./EditUser";

export type User = {
  cell: string;
  dob: {};
  email: "";
  gender: "";
  id: { value: string };
  location: {
    street: { number: number; name: string };
    city: string;
    country: string;
  };
  login: { username: string; uuid: string };
  name: { first: string; last: string };
  nat: string;
  phone: string;
  picture: { medium: string };
  registered: {};
};

export default function Users() {
  const { data, error, isLoading, refetch } = useGetSpacexLaunchesQuery("api");
  const initalState: User[] = [];
  const [users, setUsers] = useState<any>(initalState);
  const [editUser, setEditUser] = useState<any | null>({});
  const [isModalOpen, setModal] = useState(false);

  useEffect(() => {
    if (data) setUsers((users: []) => [...users, data.results[0]]);
    console.log("I ran");
  }, [data]);

  const handleClick = () => {
    refetch();
  };

  const deleteUser = (uuid: string) => {
    if (users.length > 0)
      setUsers(users.filter((elem: User) => elem.login.uuid !== uuid));
  };

  const closeModal = () => {
    setModal(false);
  };

  const handleEditUser = (user: User) => {
      let editedItemIndex : number;
      editedItemIndex = users.findIndex((elem: User) => elem.login.uuid === user.login.uuid)
      if(editedItemIndex > -1){
        setUsers([
            ...users.slice(0, editedItemIndex),
            user,
            ...users.slice(editedItemIndex + 1),
          ])
      }
  }

 if(error) return(<div>failed to load!</div>)
  return (
    <div className="user">
      <div className="user-container">
        {!isLoading ? (
          <div>
            <TransitionGroup component={null}>
              {users.length > 0 &&
                users.map((curUser: User) => {
                  const {
                    name: { first, last },
                    login: { username, uuid },
                    picture: { medium },
                    location: {
                      street: { number, name },
                      city,
                      country,
                    },
                  } = curUser;
                  return (
                    <CSSTransition key={uuid} timeout={300} classNames="item">
                      <div className="user--card">
                        <Card>
                          <img
                            src={medium}
                            alt="profile"
                            className="user--card-img"
                          />
                          <div>
                            {first} {last}
                            <img
                              src={edit}
                              alt="edit"
                              className="user-edit"
                              onClick={() => {
                                setEditUser(curUser);
                                setModal(true);
                              }}
                            />
                          </div>
                          <div className="user--card-username">{username}</div>
                          <div>
                            {number} {name} {city}, {country}
                          </div>
                          <img
                            src={deleteIcon}
                            alt="delete"
                            className="user-del"
                            onClick={() => deleteUser(uuid)}
                          />
                        </Card>
                      </div>
                    </CSSTransition>
                  );
                })}
              <div className="user--add-button" onClick={handleClick}>
                +
              </div>
            </TransitionGroup>
            <Modal isModalOpen={isModalOpen} closeModal={closeModal}>
              <EditUser userData={editUser} onCancel={closeModal} editUser={handleEditUser} />
            </Modal>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}
