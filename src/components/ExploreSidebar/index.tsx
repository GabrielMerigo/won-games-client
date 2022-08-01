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
    {items?.map(item => (
      <div key={item.title}>
        <Heading lineBottom lineColor="secondary" size='small'>
          {item.title}
        </Heading>

        {item.type === 'checkbox' && (
          item?.fields.map((field) => (
            <Checkbox
              key={field.name}
              name={field.name}
              label={field.label}
              labelFor={field.name}
            />
          ))
        )}

        {item.type === 'radio' && (
          item?.fields.map((field) => (
            <Radio
              value={field.name}
              key={field.name}
              id={field.name}
              name={item.name}
              label={field.label}
              labelFor={field.name}
            />
          ))
        )}
      </div>
    ))}

    <Button fullWidth size="medium">Filter</Button>
  </S.Wrapper>
)


export default ExploreSidebar
