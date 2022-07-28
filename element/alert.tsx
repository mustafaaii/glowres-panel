
/* Element Button Info
/* Element Name : Button
/* Element Description : Button
/* Element Version : 0.1
*/
import Swal from "sweetalert2";
export default function AlertElement(data: any) {


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success text-white mr-2 ml-2 rounded-none',
            cancelButton: 'btn btn-danger text-white mr-2 ml-2 rounded-none'
        },
        buttonsStyling: false
    })


    swalWithBootstrapButtons.fire({
        title: data.title,
        html: data.html,
        icon: data.icon,
        showCancelButton: false,
        confirmButtonText: data.buttontext,
        reverseButtons: true
    });



}