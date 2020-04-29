import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import OrderStore from "../stores/OrderStore";
import normalMenu from "../../normalMenuData";
import cateringMenu from "../../cateringMenuData";
import Legend from "./Legend";
import MenuSection from "./MenuSection";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-bottom: 20px;
  position: relative;
`;

const filterOptions = (item, filterCats) => {
  const itemCopy = JSON.parse(JSON.stringify(item));
  if (itemCopy.options) {
    itemCopy.options = itemCopy.options
      .map(option => {
        return {
          ...option,
          name: option.name,
          choices: option.choices.filter(choice =>
            filterCats.some(category => choice[category])
          )
        };
      })
      .filter(option => option.choices.length);
  }
  return itemCopy;
};

const useVegImage = (menuItem) => {
  const menuItemCopy = JSON.parse(JSON.stringify(menuItem));
  menuItemCopy.image = menuItem.vegImage;
  return menuItemCopy;
};

const filterMenu = (tab, fullMenu) => {
  if (tab === "Full menu") {
    return fullMenu;
  } else {
    const fullMenuItems = fullMenu
      .map(categoryData => categoryData.items)
      .flat();
    if (tab === "Vegetarian/Vegan") {
      return [
        {
          category: "Vegetarian",
          items: fullMenuItems
            .filter(item => item.vegetarian || item.vegan)
            .map(useVegImage)
            .map(item => filterOptions(item, ["vegetarian", "vegan"]))
        },
        {
          category: "Vegan",
          items: fullMenuItems
            .filter(item => item.vegan)
            .map(useVegImage)
            .map(item => filterOptions(item, ["vegan"]))
        }
      ];
    } else if (tab === "Gluten-free") {
      return [
        {
          category: "Gluten-free",
          items: fullMenuItems
            .filter(item => item.gf)
            .map(item => filterOptions(item, ["gf"]))
        }
      ];
    }
  }
};

const OrderMenu = observer(() => {
  const fullMenu =
    OrderStore.orderType === "catering" ? cateringMenu : normalMenu;
  const activeMenu = filterMenu(OrderStore.activeTab, fullMenu);

  return (
    <Container>
      <Content>
        <Legend />
        {activeMenu.map((categoryAndItemsObj, i) => (
          <MenuSection data={categoryAndItemsObj} key={i} />
        ))}
      </Content>
    </Container>
  );
});

export default OrderMenu;
