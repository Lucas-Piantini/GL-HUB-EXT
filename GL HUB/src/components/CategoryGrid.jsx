import { Card } from "./Card";
import { CategoryTitle } from "./CategoryTitle";

export const CategoryGrid = ({ data, category }) => {
  return (
    <div className="categoryContainer">
      <CategoryTitle title={category} />
      {Object.values(data).map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </div>
  );
};
