import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import "../asset/css/Cart.css";
import { Cart } from 'react-bootstrap-icons';
import "bootstrap/dist/css/bootstrap.min.css";
import { TrashFill } from 'react-bootstrap-icons';
// function Cart() {
//   return (
//     <div className="wrapper">
//       <Header tab="My Cart"/>
      
//     </div>
//   );
// }

// export default Cart;

function Carts() {
    return (
      <div className="App">
          <Header tab="My Cart"/>

          <section class="section-content padding-y mt-5">
          <div class="container">
          
          <div class="row">
              <main class="col-md-9">
          <div class="card">
          
          <table class="table table-borderless table-shopping-cart">
          <thead class="text-muted">
          <tr class="small text-uppercase">
          <th scope="col">Movie</th>
          <th scope="col" width="120">No of Tickets</th>
          <th scope="col" width="120">Price</th>
          <th scope="col" class="text-right" width="200"> </th>
          </tr>
          </thead>
          <tbody>
          <tr>
              <td>
                  <figure class="itemside">
                      <div class="aside"><img src="https://wallpapercave.com/wp/wp4399797.jpg" class="img-sm" style={{width:'3rem'}} /></div>
                      <figcaption class="info">
                          <a href="#" class="title text-dark">Some name of item goes here nice</a>
                          <p class="text-muted small">description and details <br /> goes here</p>
                      </figcaption>
                  </figure>
              </td>
              <td> 
                  <select class="form-control">
                      <option>1</option>
                      <option>2</option>  
                      <option>3</option>  
                      <option>4</option>  
                  </select> 
              </td>
              <td> 
                  <div class="price-wrap"> 
                      <var class="price">Rs.1156.00</var> 
                      <small class="text-muted"> Rs.315.20 each </small> 
                  </div> 
              </td>
              <td class="text-right"> 
              <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"><TrashFill color="#ef5350"/></a> 
              <a href="" class="btn btn-light"> Purchase</a>
              </td>
          </tr>
          <tr>
              <td>
                  <figure class="itemside">
                      <div class="aside"><img src="https://wallpapercave.com/wp/wp4399797.jpg" class="img-sm" style={{width:'3rem'}}/></div>
                      <figcaption class="info">
                          <a href="#" class="title text-dark">Product name  goes here nice</a>
                          <p class="text-muted small">description and details <br /> goes here</p>
                      </figcaption>
                  </figure>
              </td>
              <td> 
                  <select class="form-control">
                      <option>1</option>
                      <option>2</option>  
                      <option>3</option>  
                      <option>4</option>  
                  </select> 
              </td>
              <td> 
                  <div class="price-wrap"> 
                      <var class="price">Rs.149.97</var> 
                      <small  class="text-muted"> Rs.75.00 each </small>  
                  </div> 
              </td>
              <td class="text-right"> 
              <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <TrashFill color="#ef5350"/></a> 
              <a href="" class="btn btn-light btn-round"> Purchase</a>
              </td>
          </tr>
          <tr>
              <td>
                  <figure class="itemside">
                      <div class="aside"><img src="https://wallpapercave.com/wp/wp4399797.jpg" class="img-sm" style={{width:'3rem'}} /></div>
                      <figcaption class="info">
                          <a href="#" class="title text-dark">Another name of some product goes just here</a>
                          <p class="small text-muted">description and details <br /> goes here</p>
                      </figcaption>
                  </figure>
              </td>
              <td> 
                  <select class="form-control">
                      <option>1</option>
                      <option>2</option>  
                      <option>3</option>  
                  </select> 
              </td>
              <td> 
                  <div class="price-wrap"> 
                      <var class="price">Rs.98.00</var> 
                      <small class="text-muted"> Rs.578.00 each</small> 
                  </div> 
              </td>
              <td class="text-right"> 
                  <a data-original-title="Save to Wishlist" title="" href="" class="btn btn-light mr-2" data-toggle="tooltip"> <TrashFill color="#ef5350"/></a> 
                  <a href="" class="btn btn-light btn-round"> Purchase</a>
              </td>
          </tr>
          </tbody>
          </table>
          
          <div class="card-body border-top">
              <a href="#" class="btn btn-primary float-md-right"> Make Purchase <i class="fa fa-chevron-right"></i> </a>
              <a href="#" class="btn btn-light"> <i class="fa fa-chevron-left"></i> Continue shopping </a>
          </div>  
          </div> 
          
          <div class="alert alert-success mt-3">
              <p class="icontext"><i class="icon text-success fa fa-truck"></i> Happy Movie Hour</p>
          </div>
          
              </main>
              <aside class="col-md-3">
                  <div class="card mb-3">
                      <div class="card-body">
                      <form>
                          <div class="form-group">
                              <label>Have coupon?</label>
                              <div class="input-group">
                                  <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                  <span class="input-group-append"> 
                                      <button class="btn btn-primary">Apply</button>
                                  </span>
                              </div>
                          </div>
                      </form>
                      </div> 
                  </div>  
                  <div class="card">
                      <div class="card-body">
                              <dl class="dlist-align">
                              <dt>Total price:</dt>
                              <dd class="text-right">Rs. 568</dd>
                              </dl>
                              <dl class="dlist-align">
                              <dt>Discount:</dt>
                              <dd class="text-right">Rs. 658</dd>
                              </dl>
                              <dl class="dlist-align">
                              <dt>Total:</dt>
                              <dd class="text-right  h5"><strong>Rs.1,650</strong></dd>
                              </dl>
                              <hr />
                              <p class="text-center mb-3">
                                  <img src="https://flyclipart.com/thumb2/paypal-credit-card-logos-png-672268.png" height="26" />
                              </p>
                              
                      </div> 
                  </div>  
              </aside> 
          </div>
          
          </div> 
          </section>
        <Footer/>
      </div>
    );
  }
  export default Carts;