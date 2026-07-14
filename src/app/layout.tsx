import "./globals.css";

export const metadata = {
  title: "Febutopia",
  description:
    "A fictional utopian civilization built on equality, justice and cooperation"
};


export default function RootLayout({
children
}:{
children:React.ReactNode
}){

return (

<html lang="en">

<body>

{children}

</body>

</html>

)

}
