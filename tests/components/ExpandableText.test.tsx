import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'
import userEvent from '@testing-library/user-event'

describe('expandable text', () => {
    it('should render the full text prop less than 255 char', () => {
        const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, iure?'
        render(<ExpandableText text={text} />)

        expect(screen.getByText(text)).toBeInTheDocument()
    })

    it('should not render button if text is bleow 255 charectors', () => {
        const text = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, iure?'
        render(<ExpandableText text={text} />)

        const button = screen.queryByRole('button')
        expect(button).not.toBeInTheDocument()

    })

    it('should  render button and truncate if text is greaterthan 255 charectors', async () => {
        const text = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis libero quaerat ducimus sunt sint facere, molestias distinctio! Tenetur debitis rem culpa sapiente maxime qui et expedita perspiciatis dolorem aperiam quis unde libero exercitationem eveniet adipisci, obcaecati amet praesentium provident assumenda? Laudantium autem, quas exercitationem voluptatibus, ratione, ea sint odit officia ipsum error iste! Provident, nulla corrupti ad quos quod quo vel consequuntur aperiam eligendi est, nemo expedita eveniet consequatur facilis sunt illum esse quam! Nihil praesentium dolor facere laborum dicta officia minus fugit odio. Dignissimos reprehenderit sunt, aperiam in neque itaque vero! Illum, a? Doloremque quasi unde doloribus, modi, autem eveniet fugit inventore amet commodi quam suscipit? Cumque suscipit adipisci explicabo saepe vero voluptate minima cum corrupti facilis, obcaecati incidunt dolores sunt veniam laboriosam debitis facere amet maiores totam tempore! Animi impedit nisi porro, laboriosam sunt provident asperiores minus aliquid repudiandae reprehenderit! Eos aliquid fugit cum, minima aspernatur nihil doloremque ea, sequi nulla, necessitatibus magni quidem saepe maiores eius fuga! Quae itaque non velit quidem, deserunt amet id eligendi nesciunt dolor sunt, commodi voluptas dolores labore officia perspiciatis reprehenderit inventore ipsam animi eos sapiente ipsum? Quos optio debitis dolore et quibusdam vero. Vel est voluptatum explicabo architecto ab, perferendis, nisi porro aspernatur aperiam ratione sed perspiciatis molestiae, molestias eos. Earum, perspiciatis voluptate. Eaque laboriosam aspernatur aut quisquam sed. Impedit asperiores, placeat optio facilis ad voluptatem explicabo harum. Error, consequatur quae. Enim asperiores sed saepe accusamus delectus quis nihil harum, necessitatibus natus dicta error labore cumque porro veniam officia illum recusandae eligendi voluptatibus, ex itaque! Illo, veritatis modi unde cum eaque vel consequuntur dolore labore omnis dolorem adipisci obcaecati vitae deleniti debitis provident voluptatem in temporibus asperiores consequatur distinctio pariatur. Nobis vel blanditiis, velit eius quisquam omnis cum! Aliquam totam distinctio animi, est, sapiente cumque, illo ab ullam dolor perspiciatis vel."
        render(<ExpandableText text={text} />)

        expect(screen.getByText(`${text.substring(0, 255)}...`)).toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveTextContent("Show More");

        const button = screen.getByRole('button')
        const user = userEvent.setup()
        await user.click(button)

        expect(button).toHaveTextContent('Show Less')
        expect(screen.getByText(text))

        await user.click(button)
        expect(button).toHaveTextContent('Show More')
    })
})