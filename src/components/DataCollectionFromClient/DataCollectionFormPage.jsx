import { useForm } from "react-hook-form";
import { styled } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { FetchingFailedScreen } from "./FetchingFailedScreen";
import { NoDataScreen } from "./NoDataScreen";
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
import { useNavigate } from "react-router-dom";

// Styled Components
const FormTitle = styled("h2")`
  text-align: left;
  color: grey;
`;

const HrTag = styled("hr")`
  border: none;
  border-top: 1px solid #ccc;
  margin: 10px 0 20px;
`;

const FormWrapper = styled("div")`
  max-width: 1500px;
  margin: 30px auto;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const BoxAroundField = styled("div")`
  margin: 0 auto;
  max-width: 1200px;
  padding: 16px;
`;

const FieldRow = styled("div")`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = styled("label")`
  flex: 0 0 200px;
  font-size: 1rem;
  color: #4b0082;
  margin-right: 1rem;

  @media (max-width: 500px) {
    flex: 0 0 auto;
    width: 100%;
    margin-bottom: 15px;
  }

  span {
    color: red;
    margin-left: 4px;
  }
`;

const Input = styled("input")`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled("textarea")`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled("select")`
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ErrorText = styled("p")`
  @media (max-width: 500px) {
    margin-left: 0px;
    margin-bottom: 24px;
  }
  color: red;
  margin-left: 216px;
  font-size: 0.875rem;
  margin-top: -10px;
  margin-bottom: 1rem;
`;

const ButtonRow = styled("div")`
  display: flex;
  justify-content: flex-end;
  padding: 16px;
`;

const SubmitButton = styled("button")`
  background-color: #4b0082;
  color: white;
  box-shadow: 0 4px 8px rgba(75, 0, 130, 0.4);
  padding: 8px 20px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #37006b;
    transform: scale(1.05);
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export function DataCollectionFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    trigger,
    reset,
    watch,
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const selectedCategoryIds = data.categoryIds || [];
    const selectedSubCategoryIds = data.subCategoryIds || [];

    const isValid = selectedCategoryIds.every((catId) =>
      subCategories.some(
        (sub) =>
          sub.categoryId === Number(catId) &&
          selectedSubCategoryIds.includes(String(sub.subCategoryId))
      )
    );

    if (!isValid) {
      alert(
        "Please select at least one subcategory for each selected category."
      );
      return;
    }

    const trimmedData = Object.fromEntries(
      Object.entries({
        ...data,
        categoryIds: selectedCategoryIds.map(Number),
        subCategoryIds: selectedSubCategoryIds.map(Number),
      }).map(([key, value]) => [
        key,
        typeof value === "string" ? value.trim() : value,
      ])
    );

    try {
      // const res = await axios.post(
      //   `http://localhost:8080/api/v1/listings/save`,
      //   trimmedData
      // );
      const res = await axios.post(
        `${BASE_URL}/api/v1/listings/save`,
        trimmedData
      );
      console.log("Saved Data:", res.data);
      reset();
      navigate("/sucess");
    } catch (error) {
      if (error.response) {
        const status = error.response.data.status;
        const message = error.response.data.message;
        alert(`Error ${status}: ${message}`);
      } else if (error.request) {
        alert("Server not responding. Please try again later.");
      } else {
        alert("An unexpected error occurred.");
        console.error(error);
      }
    }
  };

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchFailed, setFetchFailed] = useState(false);

  const noData =
    !loading &&
    (categories.length === 0 || subCategories.length === 0) &&
    !fetchFailed;

  const selectedCategoryIds = watch("categoryIds") || [];
  const subCategoriesBySelected = categories
    .filter((cat) => selectedCategoryIds.includes(String(cat.categoryId)))
    .map((cat) => ({
      ...cat,
      subCategories: subCategories.filter(
        (sub) => sub.categoryId === cat.categoryId
      ),
    }));

  // useEffect For Fetching Both Category And SubCategory From DataBase
  useEffect(() => {
    Promise.all([
      axios.get(`${BASE_URL}/api/v1/categories/active`),
      axios.get(`${BASE_URL}/api/v1/subCategories/active`),
      // axios.get(`http://localhost:8080/api/v1/categories/active`),
      // axios.get(`http://localhost:8080/api/v1/subCategories/active`),
    ])
      .then(([catRes, subCatRes]) => {
        setLoading(false);
        setCategories(catRes.data);
        setSubCategories(subCatRes.data);
      })
      .catch((error) => {
        setLoading(false);
        setFetchFailed(true);
        const message = error.response?.data?.message || "Server error";
        console.error(error);
      });
  }, []);

  // UseEffect to trigger error of checkbox Category because onBlur doesnt work properly in CheckBoxes
  useEffect(() => {
    trigger("categoryIds");
  }, [watch("categoryIds")]);

  // UseEffect to trigger error of checkbox SubCategory
  useEffect(() => {
    trigger("subCategoryIds");
  }, [watch("subCategoryIds")]);

  //Loading Screen
  if (loading) {
    return <Loading />;
  }

  //FetchingFailedScreen Screen (if Error while getting Data from DB)
  if (fetchFailed) {
    return <FetchingFailedScreen />;
  }

  //If DB returns Empty Category or SubCategory
  if (noData) {
    return <NoDataScreen />;
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <FormTitle>Business Data Collection Form</FormTitle>
        <HrTag /> */}
        <BoxAroundField>
          {/* Business Name */}
          <FieldRow>
            <Label htmlFor="listingTitle">
              Business Name<span>*</span>
            </Label>
            <Input
              id="listingTitle"
              placeholder="Enter business name"
              {...register("listingTitle", {
                required: "Business Name is required",
              })}
              onBlur={() => trigger("listingTitle")}
            />
          </FieldRow>
          {errors.listingTitle && (
            <ErrorText>{errors.listingTitle.message}</ErrorText>
          )}

          {/* Description */}
          <FieldRow>
            <Label htmlFor="description">
              Description<span>*</span>
            </Label>
            <TextArea
              rows={3}
              id="description"
              placeholder="Briefly describe your business"
              {...register("description", {
                required: "Description is required",
                minLength: { value: 10, message: "At least 10 characters" },
              })}
              onBlur={() => trigger("description")}
            />
          </FieldRow>
          {errors.description && (
            <ErrorText>{errors.description.message}</ErrorText>
          )}

          {/* Address */}
          <FieldRow>
            <Label htmlFor="address">
              Address<span>*</span>
            </Label>
            <TextArea
              rows={2}
              id="address"
              placeholder="Enter full business address"
              {...register("address", {
                required: "Address is required",
                minLength: { value: 3, message: "At least 3 characters" },
              })}
              onBlur={() => trigger("address")}
            />
          </FieldRow>
          {errors.address && <ErrorText>{errors.address.message}</ErrorText>}

          {/* City */}
          <FieldRow>
            <Label htmlFor="city">
              City<span>*</span>
            </Label>
            <Input
              id="city"
              placeholder="Enter city"
              {...register("city", {
                required: "City is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "City must contain only letters",
                },
              })}
              onBlur={() => trigger("city")}
            />
          </FieldRow>
          {errors.city && <ErrorText>{errors.city.message}</ErrorText>}

          {/* Contact Number */}
          <FieldRow>
            <Label htmlFor="contactNumber">
              Contact Number<span>*</span>
            </Label>
            <Input
              id="contactNumber"
              placeholder="Enter 10-digit contact number"
              type="tel"
              {...register("contactNumber", {
                required: "Contact number is required",
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit Indian mobile number",
                },
              })}
              onBlur={() => trigger("contactNumber")}
            />
          </FieldRow>
          {errors.contactNumber && (
            <ErrorText>{errors.contactNumber.message}</ErrorText>
          )}

          {/* WhatsApp Number */}
          <FieldRow>
            <Label htmlFor="whatsappNumber">
              WhatsApp Number<span>*</span>
            </Label>
            <Input
              id="whatsappNumber"
              placeholder="Enter WhatsApp number"
              type="tel"
              {...register("whatsappNumber", {
                required: {
                  value: true,
                  message: "WhatsApp Number is Required",
                },
                pattern: {
                  value: /^[6-9]\d{9}$/,
                  message: "Enter a valid 10-digit Indian mobile number",
                },
              })}
              onBlur={() => trigger("whatsappNumber")}
            />
          </FieldRow>
          {errors.whatsappNumber && (
            <ErrorText>{errors.whatsappNumber.message}</ErrorText>
          )}

          {/* Email */}
          <FieldRow>
            <Label htmlFor="email">
              Email<span>*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
              onBlur={() => trigger("email")}
            />
          </FieldRow>
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}

          <FieldRow>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="text"
              placeholder="Optional - Enter website name or URL"
              {...register("website")}
              onBlur={() => trigger("website")}
            />
          </FieldRow>

          <HrTag style={{ marginTop: "50px" }} />
          {/* Category Checkboxes */}
          <FieldRow style={{ alignItems: "flex-start" }}>
            <Label>
              Categories<span>*</span>
            </Label>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "6px" }}
            >
              {categories.map((category) => (
                <label
                  key={category.categoryId}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <input
                    type="checkbox"
                    value={category.categoryId}
                    {...register("categoryIds", {
                      validate: (value) =>
                        (value && value.length > 0) ||
                        "Please select at least one category",
                    })}
                  />
                  <span style={{ marginLeft: "8px" }}>
                    {category.categoryName}
                  </span>
                </label>
              ))}
            </div>
          </FieldRow>
          {errors.categoryIds && (
            <ErrorText>{errors.categoryIds.message}</ErrorText>
          )}
          {/* SubCategory */}
          {selectedCategoryIds.length > 0 && (
            <>
              <HrTag style={{ marginTop: "50px" }} />
              <FieldRow style={{ alignItems: "flex-start" }}>
                <Label>
                  Sub Categories<span>*</span>
                </Label>

                <div style={{ flex: 1 }}>
                  {subCategoriesBySelected.map((cat) => (
                    <div key={cat.categoryId} style={{ marginBottom: "1rem" }}>
                      <div style={{ fontWeight: 600, color: "#4b0082" }}>
                        {cat.categoryName}
                      </div>
                      {cat.subCategories.length > 0 ? (
                        cat.subCategories.map((sub) => (
                          <label
                            key={sub.subCategoryId}
                            style={{
                              display: "block",
                              marginLeft: "10px",
                              marginTop: "4px",
                            }}
                          >
                            <input
                              type="checkbox"
                              value={sub.subCategoryId}
                              {...register("subCategoryIds", {
                                validate: () => {
                                  const selectedCategoryIds =
                                    watch("categoryIds") || [];
                                  const selectedSubCategoryIds =
                                    watch("subCategoryIds") || [];

                                  const isValid = selectedCategoryIds.every(
                                    (catId) =>
                                      subCategories.some(
                                        (sub) =>
                                          sub.categoryId === Number(catId) &&
                                          selectedSubCategoryIds.includes(
                                            String(sub.subCategoryId)
                                          )
                                      )
                                  );

                                  return (
                                    isValid ||
                                    "Please select at least one subcategory for each selected category."
                                  );
                                },
                              })}
                            />

                            {sub.subCategoryName}
                          </label>
                        ))
                      ) : (
                        <p style={{ marginLeft: "10px", color: "gray" }}>
                          No subcategories available.
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </FieldRow>
              {errors.subCategoryIds && (
                <ErrorText>{errors.subCategoryIds.message}</ErrorText>
              )}
            </>
          )}

          {/* Submit Button */}
        </BoxAroundField>

        <ButtonRow>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </SubmitButton>
        </ButtonRow>
      </form>
    </FormWrapper>
  );
}
