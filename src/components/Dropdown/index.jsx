import {
    BtnWrap,
    CloseIcon,
    DropdownContainer,
    DropdownLink,
    DropdownMenu,
    DropdownWrapper,
    Icon,
} from './Dropdown'
import { menuData } from '../../data/menuData'
import { Button } from '../shared/Button'

const Dropdown = ({ isOpen, toggle }) => {
    return (
        <DropdownContainer isOpen={isOpen}>
            <Icon>
                <CloseIcon onClick={toggle} />
            </Icon>
            <DropdownWrapper>
                <DropdownMenu>
                    {menuData.map((item, index) => (
                        <DropdownLink
                            to={item.link}
                            onClick={toggle}
                            key={index}
                        >
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                <BtnWrap>
                    <Button
                        primary='true'
                        rounded='true'
                        big='true'
                        to='contact'
                        onClick={toggle}
                    >
                        Contact Us
                    </Button>
                </BtnWrap>
            </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
