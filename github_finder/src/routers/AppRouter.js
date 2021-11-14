import React from 'react';
import { BrowserRouter, Route, Switch,Link,NavLink} from 'react-router-dom'
// function componentlere state bilgileri eklenebilir!
// ama o dersi daha sonra öğrenicez
// bu işlen hooksla yapılır
// ilerleyen aşamalarda öğreneceğiz.
// react router sayfanın yönlendirmesini ayarlayan bir kütüphanedir. örneğin /index /iletisim
// örnek:
const Menu =() => (
    <nav>
        {/* <ul className="list">
            <li className="list-item"><Link to="/">Home</Link></li>
            <li className="list-item"><Link to="/contact">Contact</Link></li>
            <li className="list-item"><Link to="/products">Products</Link></li>
        </ul> */}
         <ul className="list">
            <li className="list-item"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
            <li className="list-item"><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            <li className="list-item"><NavLink exact to="/products" activeClassName="active">Products</NavLink></li>
            <li className="list-item"><NavLink to="/products/12" activeClassName="active">12.Product</NavLink></li>
        </ul>
    </nav>
);
const Header = () => (
    <div>
        <h2>
            Github Finder
        </h2>
    </div>
)
const HomePage = () => (
    <>
    <div>This is homepage.</div>
    </>
);
const ContactPage = () => (
    <>
    <div>This is contact page.</div>
    </>
);
const ProductsPage = () => (
    <>
    <div>This is products page.</div>
    </>
);
const ProductDetailsPage = (props) => {
    const id = (props.match.params.id);
    return (
        <>
        <div>Product details page</div>
        </>
    )
}
const NotFound=()=>(
    <>
    <div>404 not found</div>
    </>
)

const AppRouter = () => (
    <BrowserRouter>
    <Header/>
    <Menu/>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/contact" component={ContactPage}/>
            <Route exact path="/products" component={ProductsPage}/>
            <Route path="/products/:id" component={ProductDetailsPage}/>
            <Route component={NotFound}/>
        </Switch>
    </BrowserRouter>
)

export default AppRouter