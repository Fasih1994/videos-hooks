import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div
      className="search-bar ui segment"
      style={{ backgroundColor: "whitesmoke" }}
    >
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Vedio Search</label>
          <input
            type="text"
            placeholder="type here."
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

// class SearchBar extends React.Component {
//   //  state = { term: "" };
//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.onTermSubmit(this.state.term);
//   };
//   render() {
//     return (
//       <div
//         className="search-bar ui segment"
//         style={{ backgroundColor: "whitesmoke" }}
//       >
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Vedio Search</label>
//             <input
//               type="text"
//               placeholder="type here."
//               value={this.state.term}
//               onChange={this.onInputChange}
//             />
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

export default SearchBar;
