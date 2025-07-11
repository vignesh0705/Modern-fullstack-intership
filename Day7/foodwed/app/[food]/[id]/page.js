import { useRouter } from "next/navigation";

const SomeComponent = () => {
  const router = useRouter();

  const goToFoodPage = (id) => {
    router.push(`/food/${id}`);
  };

  return (
    <div onClick={() => goToFoodPage(1)}>
      <h2>Margherita Pizza</h2>
    </div>
  );
};
