'use client';
import React, { useState, useEffect } from 'react';

// const treeData = [
//   {
//     id: 1,
//     name: 'Parent 1',
//     children: [
//       {
//         id: 11,
//         name: 'Child 1.1',
//         children: [
//           { id: 111, name: 'Subchild 1.1.1', children: [] },
//           { id: 112, name: 'Subchild 1.1.2', children: [] },
//         ],
//       },
//       {
//         id: 12,
//         name: 'Child 1.2',
//         children: [
//           { id: 121, name: 'Subchild 1.2.1', children: '12312' },
//           { id: 122, name: 'Subchild 1.2.2', children: [] },
//         ],
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: 'Parent 2',
//     children: [
//       {
//         id: 21,
//         name: 'Child 2.1',
//         children: [
//           { id: 211, name: 'Subchild 2.1.1', children: [] },
//           { id: 212, name: 'Subchild 2.1.2', children: [] },
//         ],
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: 'Parent 3',
//     children: [],
//   },
// ];

// const TreeNode = ({ node }) => {
//   const [isOpen, setIsopen] = useState(false);
//   const isHasChildren =
//     Array.isArray(node.children) && node.children.length !== 0;
//   return (
//     <ul>
//       <li
//         onClick={() => {
//           isHasChildren && setIsopen(!isOpen);
//         }}
//       >
//         {node.name}
//       </li>
//       {isOpen && (
//         <li style={{ marginLeft: '10px' }}>
//           {node.children.map((child) => {
//             return <TreeNode key={child.id} node={child} />;
//           })}
//         </li>
//       )}
//     </ul>
//   );
// };

// const TreeView = () => {
//   return (
//     <>
//       {data.map((node) => {
//         return <TreeNode key={node.id} node={node} />;
//       })}
//     </>
//   );
// };

//https://62f17dabb1098f1508019344.mockapi.io/items

const AboutPage = () => {
  return <div>О нас</div>;
};

export default AboutPage;

//  const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLodaing] = useState(false);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLodaing(true);
//         const res = await fetch(
//           'https://62f17dabb1098f1508019344.mockapi.io/items'
//         );
//         if (!res.ok) {
//           throw new Error(res.status);
//         }
//         const data = await res.json();
//         setProducts(data);
//       } catch (error) {
//         setError(error.message);
//       } finally {
//         setLodaing(false);
//       }
//     };
//     fetchProducts();
//   }, []);

// const [products, setProducts] = useState([]);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// useEffect(() => {
//   setLoading(true);
//   fetch('https://62f17dabb1098f1508019344.mockapi.io/items')
//     .then((res) => {
//       if (!res.ok) throw new Error(`Ошибка: ${res.status}`);
//       return res.json();
//     })
//     .then((data) => setProducts(data))

//     .catch((err) => setError(err.message))
//     .finally(() => setLoading(false));
// }, []);

// {loading && <div>Загрузка...</div>}
//   {error && <div>Ошибка: {error}</div>}
//   {products && (
//     <ul>
//       {products.map((item) => (
//         <li style={{ marginLeft: '50px' }} key={item.id}>
//           {item.name}
//         </li>
//       ))}
//     </ul>
//   )}

//  return (
//     <div className="p-4">
//       {data.map((node) => {
//         return <TreeNode key={node.id} node={node} />;
//       })}
//     </div>
//   );

// const [isOpen, setIsOpen] = React.useState(false);
// const hasChildren = node.children && node.children.length > 0;

// return (
//   <ul>
//     <li onClick={() => hasChildren && setIsOpen(!isOpen)}>{node.name}</li>

//     {isOpen && hasChildren && (
//       <li style={{ marginLeft: '10px' }}>
//         {node.children.map((child) => (
//           <TreeNode key={child.id} node={child} />
//         ))}
//       </li>
//     )}
//   </ul>
// );
