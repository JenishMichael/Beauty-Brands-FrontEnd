import { useForm } from "react-hook-form";
import { styled } from "@mui/material";

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
    margin-bottom: 8px;
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
`;

export function DataCollectionFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    alert("Data Collected");
    console.log("Form Data:", data);
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Business Data Collection Form</FormTitle>
        <HrTag />
        <BoxAroundField>
          {/* Business Name */}
          <FieldRow>
            <Label htmlFor="listingTitle">
              Business Name<span>*</span>
            </Label>
            <Input
              id="listingTitle"
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
              {...register("address", {
                required: "Address is required",
                minLength: { value: 10, message: "At least 10 characters" },
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
            <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
            <Input
              id="whatsappNumber"
              type="tel"
              {...register("whatsappNumber", {
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

          {/* Website */}
          <FieldRow>
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              type="url"
              {...register("website", {
                pattern: {
                  value: /^(https?:\/\/)?(www\.)?[a-z0-9-]+\.[a-z]{2,}(\/.*)?$/,
                  message: "Enter a valid URL",
                },
              })}
              onBlur={() => trigger("website")}
            />
          </FieldRow>
          {errors.website && <ErrorText>{errors.website.message}</ErrorText>}

          {/* Category */}
          <FieldRow>
            <Label htmlFor="categoryId">
              Category<span>*</span>
            </Label>
            <Select
              id="categoryId"
              {...register("categoryId", {
                required: "Please select a category",
              })}
              onBlur={() => trigger("categoryId")}
            >
              <option value="">-- Select Category --</option>
              <option value="1">Beauty Salon</option>
              <option value="2">Tattoo Studio</option>
            </Select>
          </FieldRow>
          {errors.categoryId && (
            <ErrorText>{errors.categoryId.message}</ErrorText>
          )}

          {/* Subcategory */}
          <FieldRow>
            <Label htmlFor="subCategoryId">
              Subcategory<span>*</span>
            </Label>
            <Select
              id="subCategoryId"
              {...register("subCategoryId", {
                required: "Please select a subcategory",
              })}
              onBlur={() => trigger("subCategoryId")}
            >
              <option value="">-- Select Subcategory --</option>
              <option value="101">Hair Styling</option>
              <option value="102">Body Art</option>
            </Select>
          </FieldRow>
          {errors.subCategoryId && (
            <ErrorText>{errors.subCategoryId.message}</ErrorText>
          )}

          {/* Submit Button */}
        </BoxAroundField>

        <ButtonRow>
          <SubmitButton type="submit">Submit</SubmitButton>
        </ButtonRow>
      </form>
    </FormWrapper>
  );
}
