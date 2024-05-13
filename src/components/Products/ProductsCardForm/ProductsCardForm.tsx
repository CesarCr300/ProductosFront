import { useForm } from "react-hook-form";
import { useEffect, useMemo, useState } from "react";
import {
  ContentState,
  EditorState,
  convertFromHTML,
  convertToRaw,
} from "draft-js";

import { FormContainer } from "../../Form/FormContainer";
import { ProductUpdate } from "../../../pages/productsCard/model/product-update.model";
import { ProductModel } from "../../../pages/productsCard/model/product.model";
import { Button } from "../../Button";
import { RichTextEditor } from "../../RichtText";
import { productsCardFormFields } from "./productsCardForm.fields";
import { stateToHTML } from "draft-js-export-html";

interface IProductsCardForm {
  product: ProductModel | null;
  onSubmit: (data: any) => Promise<void> | void;
}

export const ProductsCardForm = ({
  product = null,
  onSubmit,
}: IProductsCardForm) => {
  const { register, handleSubmit } = useForm<ProductUpdate>();
  const [description, setDescription] = useState(EditorState.createEmpty());

  useEffect(() => {
    if (product == null) return;
    setDescription(
      EditorState.createWithContent(
        ContentState.createFromBlockArray(
          convertFromHTML(product.description).contentBlocks
        )
      )
    );
  }, [product]);

  const fields = useMemo(
    () => productsCardFormFields(register, product),
    [product]
  );

  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    const descriptionInText = stateToHTML(description.getCurrentContent());
    handleSubmit((data) => {
      onSubmit({ ...data, description: descriptionInText });
    })();
  };

  return (
    <FormContainer fields={fields} onSubmit={handleOnSubmit}>
      <h4 style={{ margin: 0 }}>Descripción</h4>
      <RichTextEditor value={description} setValue={setDescription} />
      <Button text={product == null ? "Crear" : "Guardar"} type="submit" />
    </FormContainer>
  );
};
