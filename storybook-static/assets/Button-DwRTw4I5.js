import{j as s}from"./jsx-runtime-DWbWqHZ-.js";import{p as c}from"./styled-components.browser.esm-E6QWLWCY.js";import{c as d}from"./clsx-B-dksMZM.js";const u=c.button`
  padding: ${({size:e})=>e==="small"?"5px 10px":e==="large"?"15px 30px":"10px 20px"};
  font-size: ${({size:e})=>e==="small"?"0.8rem":e==="large"?"1.2rem":"1rem"};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius:  8px;

   &.btn-primary {
     background-color: #007bff;
     color: white;
   }

   &.btn-secondary {
     background-color: #6c757d;
     color: white;
   }

   &.btn-danger {
     background-color: #dc3545;
     color: white;
   }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`,i=({label:e,onClick:t,type:r,size:o="medium",disabled:a=!1,className:n="",children:l})=>s.jsx(u,{type:r,size:o,onClick:t,disabled:a,className:d(n,r&&`btn-${r}`,`btn-${o}`),children:e||l});i.__docgenInfo={description:`Button component for user interaction\r
\r
@param {string} label - The text to display on the button\r
@param {function} onClick - The function to call on button click\r
@param {string} type - The type of button ('primary', 'secondary', 'danger')\r
@param {string} size - The size of the button ('small', 'medium', 'large')\r
@param {boolean} disabled - Whether the button is disabled\r
@returns {JSX.Element} The rendered button component`,methods:[],displayName:"AbvButton",props:{size:{defaultValue:{value:"'medium'",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{i as A};
