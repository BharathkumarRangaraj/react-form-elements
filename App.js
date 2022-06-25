export default function Form() {
  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    comments: "",
    isfriendly: true,
    employment: "",
    favcolor: "",
  });
  function handleclick(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevdata) => {
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handlesubmit(event) {
    //event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          name="firstname"
          type="text"
          placeholder="first name"
          onChange={handleclick}
          value={formData.firstname}
        />
        <br></br>
        <br></br>
        <input
          name="lastname"
          type="text"
          placeholder="last name"
          onChange={handleclick}
          value={formData.lastname}
        />
        <br></br>
        <br></br>
        <input
          type="email"
          placeholder="enter email"
          name="email"
          onChange={handleclick}
          value={formData.email}
        />
        <br></br>
        <br></br>
        <textarea
          placeholder="entercomments"
          onChange={handleclick}
          value={formData.comments}
          name="isfriendly"
        />
        <br></br>
        <br></br>
        <input type="checkbox" id="isfriendly" checked={formData.isfriendly} />
        <label htmlFor="isfriendly">Are you frienldy</label>
        <br />
        <br />
        <fieldset>
          <legend>Current employement status</legend>
          <input
            type="radio"
            id="umemployed"
            name="employment"
            value="umemployed"
            checked={formData.employment === "umemployed"}
            onChange={handleclick}
          />
          <label htmlFor="unemployed">unemployed</label>
          <br />
          <br />
          <input
            type="radio"
            id="parttime"
            name="employment"
            value="parttime"
            checked={formData.employment === "parttime"}
            onChange={handleclick}
          />
          <label htmlFor="parttime">parttime</label>
          <br />
          <br />
          <input
            type="radio"
            id="fulltime"
            name="employment"
            value="fulltime"
            checked={formData.employment === "fulltime"}
            onChange={handleclick}
          />
          <label htmlFor="fulltime">fulltime</label>
        </fieldset>
        <br />
        <br />
        <label htmlFor="dropdown">your fav color is?</label>

        <select
          id="favcolor"
          onChange={handleclick}
          value={formData.favcolor}
          name="favcolor"
        >
          <option value="">--choose--</option>
          <option value="green">green</option>
          <option value="yellow">yello</option>
          <option value="red">Red</option>
          <option value="violet">violet</option>
        </select>
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}
