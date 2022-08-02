import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import Radio from '../../components/Radio'
import Heading from '../../components/Heading'
import * as S from './styles'
import { useState } from 'react'
import { Close, FilterList } from 'styled-icons/material-outlined'

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

export type Values = {
  [field: string]: boolean | string
}

export type ExploreSidebarProps = {
  items: ItemsProps[],
  initialValues?: Values,
  onFilter: (values: Values) => void;
}

const ExploreSidebar = ({ items, initialValues = {}, onFilter }: ExploreSidebarProps) => {
  const [values, setValues] = useState<Values>(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  const handleFilter = () => {
    setIsOpen(false);
    onFilter(values);
  }

  const handleChange = (name: string, value: string | boolean) => {
    setValues((state) => ({ ...state, [name]: value }))
  }

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Overlay aria-hidden={isOpen} />
      <S.IconWrapper>
        <FilterList aria-label="open filters" onClick={() => setIsOpen(true)}></FilterList>
        <Close aria-label="close filters" onClick={() => setIsOpen(false)}></Close>
      </S.IconWrapper>

      <S.Content>
        {items?.map(item => (
          <S.Items key={item.title}>

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
                  isChecked={!!values[field.name]}
                  onCheck={(value) => handleChange(field.name, value)}
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
                  defaultChecked={field.name === values[item.name]}
                  onCheck={() => handleChange(item.name, field.name)}
                />
              ))
            )}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button onClick={handleFilter} fullWidth size="medium">Filter</Button>
      </S.Footer>
    </S.Wrapper>
  )
}


export default ExploreSidebar
