import Dashboard from "views/Admin/Dashboard";

import AddInquiry from "views/Admin/Inquiries/AddInquiry";
import InquiriesList from "views/Admin/Inquiries/InquiriesList";
import EditInquiry from "views/Admin/Inquiries/EditInquiry";

const AdminRoutes = [
  { path: "/admin", exact: true, name: "Dashboard", component: Dashboard },
  {
    path: "/admin/inquiries",
    exact: true,
    name: "Inquiries List",
    component: InquiriesList,
  },
  {
    path: "/admin/inquiries/add",
    exact: true,
    name: "Add Inquiry",
    component: AddInquiry,
  },
  {
    path: "/admin/inquiries/:inquiry_id",
    name: "Edit Inquiry",
    component: EditInquiry,
  },
];

export default AdminRoutes;
