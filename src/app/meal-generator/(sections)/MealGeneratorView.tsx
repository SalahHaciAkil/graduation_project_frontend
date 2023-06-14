"use client";
import { useGenerateMeal } from "@/app/meal-generator/hooks";
import { Button, HeadTitle, Input, Textarea } from "@/components";
import React from "react";

function MealGeneratorView() {
  const { getResult, result, loading } = useGenerateMeal();
  const [data, setData] = React.useState<{
    ingredients: string;
    kcal: number;
    type_of_meal: string;
  }>({
    ingredients: "",
    kcal: 0,
    type_of_meal: "",
  });

  const onFieldChanged = (e: any) => {
    setData({ ...data, [e.target.name]: e.target.value.trim() });
  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <HeadTitle text="Day Meal Generator" style="m-auto" />
      <Input
        name="ingredients"
        id="ingredients"
        onChange={onFieldChanged}
        placeHolder="Enter ingredients separated by comma"
        style="w-2/3"
      />
      <Input
        name="kcal"
        id="kcal"
        onChange={onFieldChanged}
        placeHolder="How many calories would you like to consume today?"
        type="number"
        max="10000"
        style="w-2/3"
      />
      <Input
        name="type_of_meal"
        id="type_of_meal"
        onChange={onFieldChanged}
        placeHolder="What type of meal would you like to eat today? .e.g Italian, Mexican, etc."
        style="w-2/3"
      />
      <Textarea
        placeholder={loading ? "consulting Ai..." : "..."}
        cols={30}
        rows={10}
        readOnly
        value={loading ? "" : result}
        style="w-2/3"
      />{" "}
      <Button
        style="mt-2"
        loading={loading}
        type="button"
        onClick={() => {
          getResult(data);
        }}
      >
        Submit
      </Button>
    </div>
  );
}

export default MealGeneratorView;
