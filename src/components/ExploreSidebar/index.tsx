import Checkbox from '../../components/Checkbox'
import Button from '../../components/Button'
import Radio from '../../components/Radio'
import Heading from '../../components/Heading'
import * as S from './styles'
import { useEffect, useState } from 'react'
import { Close, FilterList } from 'styled-icons/material-outlined'
import { ParsedUrlQueryInput } from 'querystring'
import xor from 'lodash.xor'

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

export type Values = ParsedUrlQueryInput;

export type ExploreSidebarProps = {
  items: ItemsProps[],
  initialValues?: Values,
  onFilter: (values: Values) => void;
}

const ExploreSidebar = ({ items, initialValues = {}, onFilter }: ExploreSidebarProps) => {
  const [values, setValues] = useState<Values>(initialValues);
  const [isOpen, setIsOpen] = useState(false);

  const handleRadio = (name: string, value: string | boolean) => {
    setValues((state) => ({ ...state, [name]: value }))
  }

  const handleCheckbox = (name: string, value: string) => {
    const currentList = (values[name] as []) || [];
    setValues((state) => ({ ...state, [name]: xor(currentList, [value]) }))
  }

  const handleFilterMenu = () => {
    setIsOpen(false);
  }

  useEffect(() => {
    onFilter(values);
  }, [values]);

  console.log(items);

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
                  isChecked={(values[item.name] as string[])?.includes(field.name)}
                  onCheck={(value) => handleCheckbox(item.name, field.name)}
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
                  defaultChecked={String(field.name) === String(values[item.name])}
                  onCheck={() => handleRadio(item.name, field.name)}
                />
              ))
            )}
          </S.Items>
        ))}
      </S.Content>

      <S.Footer>
        <Button onClick={handleFilterMenu} fullWidth size="medium">Filter</Button>
      </S.Footer>
    </S.Wrapper>
  )
}


export default ExploreSidebar
