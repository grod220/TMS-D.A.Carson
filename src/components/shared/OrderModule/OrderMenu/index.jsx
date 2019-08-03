import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import OrderStore from "../stores/OrderStore";
import normalMenu from "../../normalMenuData";
import cateringMenu from "../../cateringMenuData";
import Legend from "./Legend";
import MenuSection from "./MenuSection";

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 90%;
  max-width: 1200px;
  margin-bottom: 20px;
  position: relative;
`;

const filterOptions = (item, filterCat) => {
  const itemCopy = JSON.parse(JSON.stringify(item));
  if (itemCopy.options) {
    itemCopy.options = itemCopy.options.map(option => {
      return {
        name: option.name,
        choices: option.choices.filter(choice => choice[filterCat])
      };
    });
  }
  return itemCopy;
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
            .filter(item => item.vegetarian)
            .map(item => filterOptions(item, "vegetarian"))
        },
        {
          category: "Vegan",
          items: fullMenuItems
            .filter(item => item.vegan)
            .map(item => filterOptions(item, "vegan"))
        }
      ];
    } else if (tab === "Gluten-free") {
      return [
        {
          category: "Gluten-free",
          items: fullMenuItems
            .filter(item => item.gf)
            .map(item => filterOptions(item, "gf"))
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
