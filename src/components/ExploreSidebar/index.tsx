import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import Radio from '../../components/Radio'
import Heading from '../../components/Heading'
import * as S from './styles'

type Field = {
  label: string,
  name: string
}

export type ItemsProps = {
  title: string;
  name: string;
  type: string
  fields: Field[]
}

export type ExploreSidebarProps = {
  items: ItemsProps[]
}

const ExploreSidebar = ({ items }: ExploreSidebarProps) => (
  <S.Wrapper>
    {items.map(item => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size='small'>
          {item.title}
        </Heading>

        {item.type === 'checkbox' && (
          item.fields.map((field) => (
            <Checkbox
              key={field.name}
              name={field.name}
              label={field.label}
              labelFor={field.name}
            />
          ))
        )}
      </div>

    ))}
    {/* <Heading lineBottom lineColor='secondary' size="small">Price</Heading>
    <Checkbox
      name="under-50"
      label="Under 50%"
      labelFor="under-50"
    />
    <Heading lineBottom lineColor='secondary' size="small">Sort By</Heading>
    <Radio
      id="high-to-low"
      name="sort-by"
      label="High to low"
      labelFor="high-to-low"
      value="high-to-low"
    />
    <Radio
      id="low-to-high"
      name="sort-by"
      label="Low to High"
      labelFor="low-to-high"
      value="low-to-high"
    />
    <Heading lineBottom lineColor='secondary' size="small">System</Heading>
    <Heading lineBottom lineColor='secondary' size="small">Genre</Heading>


    <Button fullWidth size="medium">Filter</Button> */}
  </S.Wrapper>
)

export default ExploreSidebar
