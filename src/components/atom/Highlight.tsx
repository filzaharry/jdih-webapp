import _ from "lodash";

const Highlighted = ({text = '', highlight = ''}) => {
    if (!highlight.trim()) {
      return <span>{text}</span>
    }
    const regex = new RegExp(`(${_.escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)
    return (
      <p className="sm:text-sm text-justify lg:text-md text-gray-500 sm:ml-0 lg:ml-4">
         {parts.filter(part => part).map((part, i) => (
             regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
         ))}
     </p>
    )
 }
 export default Highlighted