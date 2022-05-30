import React, { Component } from "react";
import _ from 'lodash';

class Pagination extends React.Component {
    

   

  render() {
      const { totalItems, perPageCount, activePage,handleClick } = this.props;
      const totalPages = Math.ceil(totalItems / perPageCount);
      const pages = _.range( 1,totalPages+1,1 );

    //   console.log(pages);
    if(totalItems<=perPageCount) return null;
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
         { activePage > 1 && <li className="page-item" style={{cursor:'pointer'}} onClick = { ( activePage-1 ) >= 1 ? ()=> handleClick(activePage-1) : '' } >
            <a className="page-link" >
              Previous
            </a>
          </li>
  }
          { pages.map( page =>{
              return <li className= { activePage === page ? "page-item active" : "page-item" } style = {{cursor:'pointer'}} onClick = { () => handleClick(page) }><a class="page-link">{ page }</a></li>
          }) }
         
          
          { activePage<totalPages && <li class="page-item" style={{cursor:'pointer'}} onClick = { activePage+1 <= totalPages ? () => handleClick(activePage+1) : ''}>
            <a class="page-link" >
              Next
            </a>
          </li>
          }
        </ul>
      </nav>
    );
  }
}

export default Pagination;
