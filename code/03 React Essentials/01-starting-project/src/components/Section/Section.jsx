export default function Section({title, children, ...attributes}) {
    return (
        <section {...attributes}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}
