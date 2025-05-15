const Link = ({link}) => {
  return (
    <li>
        <a href={link.href}>{link.label}</a>
    </li>
  )
}
export default Link