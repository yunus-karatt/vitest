import { render, screen } from '@testing-library/react'
import ProductImageGallery from '../../src/components/ProductImageGallery'

describe("Users List", () => {
    it("should reurn null if no products", () => {
        const { container } = render(<ProductImageGallery imageUrls={[]} />);

        // container.firstChild === null means nothing was rendered
        // expect(container.firstChild).toBeNull();
        expect(container).toBeEmptyDOMElement()

    })

    it("should render a list of images", () => {
        const urls = [
            '/imagesone', '/imagestow'
        ]
        render(<ProductImageGallery imageUrls={urls} />)

        const images = screen.getAllByRole('img')
        expect(images).toHaveLength(urls.length)
        // expect(images[0]).toHaveAttribute('src',urls[0]) 
        // expect(images[1]).toHaveAttribute('src',urls[1]) 
        urls.forEach((url, ind) => (

            expect(images[ind]).toHaveAttribute('src', url)
        ))
    })

})