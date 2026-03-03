import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function App() {
return (
<div style={{ height: "100vh" }}>
<SwaggerUI url="/openapi.json" />
</div>
);
}