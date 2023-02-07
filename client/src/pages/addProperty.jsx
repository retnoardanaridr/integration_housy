import React, { useContext, useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { API } from '../config/api';
import {
  Label,
  TextInput,
  Checkbox,
  Button,
  Textarea,
  Select,
  FileInput,
  Alert,
} from "flowbite-react";
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/userContext';


function AddProperty() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const [city, setCity] = useState()
  var amenities = [];
  const [checked, setChecked] = useState({

  });
  
  const [selectedCity, setSelectedCity] = useState();
  const [state] = useContext(UserContext)
  const [form, setForm] = useState({
    name: '',
    city_id: '',
    thumbnail: '',
    image: '',
    address: '',
    price: '',
    typerent: '',
    amenities: '',
    bedroom: '',
    bathroom: '',
  });
  
  //fetch city_id
  const getCityId = async () => {
    try {
      const response = await API.get('/cities');
      setCity(response.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  const [selectType, setSelectedType] = useState();
  let typeRent = [
    {
      id: 1,
      name: "days"
    },
    {
      id: 2,
      name: "month"
    },
    {
      id: 1,
      name: "year"
    }
  ]

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === 'file' ? e.target.files : e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();
      formData.set("name", form.name);
      formData.set("city_id", selectedCity);
      formData.set("thumbnail", form.image[0]);
      formData.set("image", form.image[0]); 
      formData.set("address", form.address);
      formData.set("price", form.price);
      formData.set("typerent", selectType);
      formData.set("amenities", checked);
      formData.set("bedroom", form.bedroom);
      formData.set("bathroom", form.bathroom);

      const response = await API.post("/house", formData, {
        headers: {
          Authorization: `Bearer ${state.user.token}`
        }
      })
      console.log("ini data yg dikirim", response.data.data)
      const alert = (
        <Alert color="success" className="font-medium">
          Success
        </Alert>
      )
      setMessage(alert)
      navigate("/")
    } catch (error) {
      const alert = (
        <Alert color="failure" className="font-medium">
          Failed
        </Alert>
      );
      setMessage(alert)
      console.log(error)
    }
  })

  useEffect(() => {
    getCityId();
  }, []);

  return (
    <>
      <div className="bg-grey-d mb-4 flex justify-center items-center w-full h-full">
        <div className="w-3/4">
          <h3 className="font-bold mb-5 mt-4 text-3xl">Add Property</h3>
          {message && message}
          <form className="flex flex-col gap-4" onSubmit={(e) => handleSubmit.mutate(e)}>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name">Name Property</Label>
              </div>
              <TextInput id="name" type="text" name="name" onChange={handleChange} />
            </div>
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="city_id" value="City" />
              </div>
              <Select
                id="city_id"
                name='city_id'
                onChange={(e) => setSelectedCity(e.target.value)}
                required={true}
              >
                <option hidden>City</option>
                {city?.map((item) => (
                    <option value={item?.id}>{item?.name}</option>
                ))}
              </Select>
            </div>
            <div id="fileUpload">
              <div className="mb-2 block">
                <Label
                  htmlFor="file"
                  value="Upload Thumbnail"
                />
              </div>
              <FileInput
                id="file"
                name="thumbnail"
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900" htmlFor="multiple_files">Upload multiple files</label>
              <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                id="multiple_files"
                type="file"
                name="image"
                onChange={handleChange}
                multiple />
            </div>
            <div id="textarea">
              <div className="mb-2 block">
                <Label htmlFor="address" value="Address" />
              </div>
              <Textarea
                id="address"
                placeholder="address..."
                name='address'
                onChange={handleChange}
                required={true}
                rows={4}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price">Price</Label>
              </div>
              <TextInput id="price" type="number" name="price" onChange={handleChange} />
            </div>
            <div id="select">
              <div className="mb-2 block">
                <Label htmlFor="typerent" value="Type of Rent" />
              </div>
              <Select
                id="typerent"
                name='typerent'
                onChange={(e) => setSelectedType(e.target.value)}
                required={true}
              >
                <option hidden>--Choose One---</option>
                {typeRent?.map((item) => (
                  <option value={item?.name}>{item?.name}</option>
                ))}
              </Select>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="amenities" value="Amenities" />
              </div>
              <div className="flex items-center gap-7">
                <div>
                  <Checkbox id="furnished" />
                  <Label htmlFor="furnished">Furnished</Label>
                </div>
                <div>
                  <Checkbox id="petAllow" />
                  <Label htmlFor="petAllow">Pet Allowed</Label>
                </div>
                <div>
                  <Checkbox id="shareAcc" />
                  <Label htmlFor="shareAcc">Shared Accomodation</Label>
                </div>
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="beds">Bedrooms</Label>
              </div>
              <TextInput id="beds" type="number" name="bedroom" onChange={handleChange} />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="baths">Bathrooms</Label>
              </div>
              <TextInput id="baths" type="number" name="bathroom" onChange={handleChange} />
            </div>
            <div className="flex justify-center items-center">
              <Button type="submit">Save</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddProperty;
