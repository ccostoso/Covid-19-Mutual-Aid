// import React from 'react'
// import ReactDOM from 'react-dom'
// import Avatar from 'react-avatar-edit'

// class ProfilePicture extends Component {

//   constructor(props) {
//     super(props)
//     const src = 'https://vectorified.com/images/no-profile-picture-icon-13.png'
//     this.state = {
//       src
//     }
//     this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this)
//   }


//   onBeforeFileLoad(elem) {
//     if(elem.target.files[0].size > 71680){
//       alert("File is too big!");
//       elem.target.value = "";
//     };
//   }
  
//   render () {
//     return (
//       <div>
//         <Avatar
//           width={390}
//           height={295}
//           onBeforeFileLoad={this.onBeforeFileLoad}
//           src={this.state.src}
//         />
//         <img src={this.state.src} />
//       </div>
//     )
//   }
// }

// ReactDOM.render(<App /> , document.getElementById('root'))

// export default ProfilePicture;