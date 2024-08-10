import Swal from "sweetalert2";

const Error = () => {
  return (
    Swal.fire({
      text: "Error",
      icon: "error"
    })
  )
}

export default Error
