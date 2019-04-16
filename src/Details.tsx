import React from "react";
import pf, { PetResponse, PetMedia } from "petfinder-client";
// import Loadable from "react-loadable";
// import { navigate } from "@reach/router/lib/history";
import Carousel from "./Carousel";
import Modal from "./Modal";
import { RouteComponentProps, navigate } from "@reach/router";

// if (!process.env.REACT_APP_API_KEY || !process.env.REACT_APP_API_SECRET) {
//   throw new Error("no API keys");
// }

const petfinder = pf({
  key: "N/A",
  secret: "N/A"
  // key: process.env.REACT_APP_API_KEY,
  // secret: process.env.REACT_APP_API_SECRET
});

// const loading = () => <h1>loading content ...</h1>;

// const LoadableContent = Loadable({
//   loader: () => import("./AdoptModalContent"),
//   loading
// });

class Details extends React.Component<RouteComponentProps<{ id: string }>> {
  public state = {
    loading: true,
    showModal: false,
    name: "",
    animal: "",
    location: "",
    description: "",
    media: {} as PetMedia,
    breed: ""
  };

  public componentDidMount() {
    if (!this.props.id) {
      return;
    }
    petfinder.pet
      .get({ output: "full", id: this.props.id })
      .then((data: PetResponse) => {
        if (!data.petfinder.pet) {
          navigate("/");
          return;
        }
        const pet = data.petfinder.pet;
        let breed;
        if (Array.isArray(pet.breeds.breed)) {
          breed = pet.breeds.breed.join(", ");
        } else {
          breed = pet.breeds.breed;
        }
        this.setState({
          name: pet.name,
          animal: pet.animal,
          location: `${pet.contact.city},${pet.contact.state}`,
          description: pet.description,
          media: pet.media,
          breed,
          loading: false
        });
      })
      .catch(err => this.setState({ error: err }));
  }
  public toggleModal = () =>
    this.setState({ showModal: !this.state.showModal });
  public render() {
    if (this.state.loading) {
      return <h1>loading ...</h1>;
    }
    const {
      name,
      animal,
      breed,
      description,
      location,
      media,
      showModal
    } = this.state;
    return (
      <div className="details">
        <Carousel media={media} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
          <button onClick={this.toggleModal}>Adopt {name}</button>
          <p>{description}</p>
          {showModal ? (
            <Modal>
              {/* <LoadableContent toggleModal={this.toggleModal} name={name} /> */}
              <h1>Would you like to adopt {name}?</h1>
              <div className="buttons">
                <button onClick={this.toggleModal}>Yes</button>
                <button onClick={this.toggleModal}>No</button>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Details;

// to use jsx go to tsconfig.json uncomment jsx line and change it to jsx:"react" this will get rid of errors in render(){}
